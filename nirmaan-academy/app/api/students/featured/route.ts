import { NextResponse } from "next/server";
import { query } from "@/lib/prisma";

export async function GET() {
  try {
    const result = await query(
      'SELECT image_url, student_name, course, marks, display_order FROM student_data WHERE featured = true ORDER BY display_order ASC'
    );

    const topRankers = result.rows.map((s: any) => ({
      imageUrl: s.image_url,
      studentName: s.student_name,
      course: s.course,
      percentage: s.marks,
    }));

    return NextResponse.json(topRankers);
  } catch (error) {
    console.error("GET /api/students/featured error:", error);
    return NextResponse.json(
      { error: "Failed to fetch featured students" },
      { status: 500 }
    );
  }
}
