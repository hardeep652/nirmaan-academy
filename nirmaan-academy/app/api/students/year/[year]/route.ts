import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ year: string }> }
) {
  try {
    const { year } = await params;
    const yearNum = parseInt(year, 10);

    if (isNaN(yearNum)) {
      return NextResponse.json(
        { error: "Invalid year parameter" },
        { status: 400 }
      );
    }

    const students = await prisma.studentData.findMany({
      where: {
        featured: true,
        admissionYear: yearNum,
      },
      orderBy: { displayOrder: "asc" },
    });

    return NextResponse.json(students);
  } catch (error) {
    console.error("GET /api/students/year/[year] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch students by year" },
      { status: 500 }
    );
  }
}
