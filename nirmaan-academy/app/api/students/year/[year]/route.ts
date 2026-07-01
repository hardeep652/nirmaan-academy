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

    const students = await prisma.student_data.findMany({
      where: {
        featured: true,
        admission_year: yearNum,
      },
    });

    return NextResponse.json(
  students.map((student) => ({
    id: Number(student.id),
    studentName: student.student_name,
    imageUrl: student.image_url,
    course: student.course,
    rank: student.rank,
    marks: student.marks,
    collegeName: student.college_name,
    branchName: student.branch_name,
    admissionYear: student.admission_year,
    achievementYear: student.achievement_year,
    testimonial: student.testimonial,
    featured: student.featured,
    displayOrder: student.display_order,
  }))
);
  } catch (error) {
    console.error("GET /api/students/year/[year] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch students by year" },
      { status: 500 }
    );
  }
}
