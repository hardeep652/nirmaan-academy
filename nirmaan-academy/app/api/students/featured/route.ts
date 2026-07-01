import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const students = await prisma.studentData.findMany({
      where: { featured: true },
      orderBy: { displayOrder: "asc" },
    });

    const topRankers = students.map((s) => ({
      imageUrl: s.imageUrl,
      studentName: s.studentName,
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
