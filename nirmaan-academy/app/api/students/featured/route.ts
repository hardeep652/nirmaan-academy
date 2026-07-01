import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const students = await prisma.student_data.findMany({
      where: { featured: true },
      orderBy: { display_order: "asc" },
    });

    const topRankers = students.map((s) => ({
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
