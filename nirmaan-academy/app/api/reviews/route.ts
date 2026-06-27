import { NextResponse } from "next/server";
import { getPlaceReviews } from "@/lib/google-places";

export async function GET() {
  try {
    const data = await getPlaceReviews();
    if (!data) {
      return NextResponse.json(
        { error: "Failed to fetch reviews" },
        { status: 500 }
      );
    }
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("Reviews API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}