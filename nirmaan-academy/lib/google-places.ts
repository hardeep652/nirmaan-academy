import reviewsData from "@/data/reviews.json";

export interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

export interface PlaceDetailsResponse {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

// Nirmaan Academy - Akhbar Nagar, Ahmedabad
// Google Maps: https://maps.app.goo.gl/nmfQbsyrmKV9X1q48
const DATA_ID = "0x395e8378b8b89a81:0x37c3bbdaaedf6e1f";
const MAX_PAGES = 3;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatReview(r: any): GoogleReview | null {
  if (!r.snippet || r.snippet.length === 0) return null;
  return {
    author_name: r.user?.name || "Student",
    author_url: r.user?.link || "",
    profile_photo_url: r.user?.thumbnail || "",
    rating: r.rating,
    text: r.snippet,
    time: r.iso_date ? new Date(r.iso_date).getTime() / 1000 : Date.now() / 1000,
    relative_time_description: r.date || "",
  };
}

export async function getPlaceReviews(): Promise<PlaceDetailsResponse> {
  const SERP_API_KEY = process.env.SERP_API_KEY;

  if (SERP_API_KEY) {
    try {
      const allReviews: GoogleReview[] = [];
      let nextUrl: string | null = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${DATA_ID}&api_key=${SERP_API_KEY}&hl=en`;
      let pageCount = 0;
      let rating = reviewsData.rating;
      let userRatingsTotal = reviewsData.user_ratings_total;

      do {
        const response: Response = await fetch(nextUrl, { next: { revalidate: 86400 } });
        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("json")) {
          throw new Error(`SerpAPI returned non-JSON response (${response.status} ${response.statusText})`);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = await response.json();

        if (data.place_info) {
          rating = data.place_info.rating || rating;
          userRatingsTotal = data.place_info.reviews || userRatingsTotal;
        }

        if (data.search_information?.reviews_results_state === "Fully empty") {
          break;
        }

        if (data.reviews) {
          const formatted = data.reviews
            .map(formatReview)
            .filter(Boolean) as GoogleReview[];
          allReviews.push(...formatted);
        }

        nextUrl = data.serpapi_pagination?.next
          ? `${data.serpapi_pagination.next}&api_key=${SERP_API_KEY}`
          : null;
        pageCount++;
      } while (nextUrl && pageCount < MAX_PAGES);

      if (allReviews.length > 0) {
        return {
          rating,
          user_ratings_total: userRatingsTotal,
          reviews: allReviews,
        };
      }
    } catch (error) {
      console.error("SerpApi Fetch Error:", error);
    }
  }

  // Fallback to local JSON data if API Key is missing or API call fails
  return {
    rating: reviewsData.rating,
    user_ratings_total: reviewsData.user_ratings_total,
    reviews: reviewsData.reviews,
  };
}

