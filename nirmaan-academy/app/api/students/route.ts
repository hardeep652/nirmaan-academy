import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createStudentSchema } from "@/lib/validations/student";

export async function GET() {
  try {
    const students = await prisma.student_data.findMany({
      orderBy: {
  display_order: "asc",
},
    });
    return NextResponse.json(students);
  } catch (error) {
    console.error("GET /api/students error:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = createStudentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

   const student = await prisma.student_data.create({
  data: {
    student_name: parsed.data.studentName,
    image_url: parsed.data.imageUrl,
    course: parsed.data.course,
    rank: parsed.data.rank,
    marks: parsed.data.marks,
    college_name: parsed.data.collegeName,
    branch_name: parsed.data.branchName,
    admission_year: parsed.data.admissionYear,
    achievement_year: parsed.data.achievementYear,
    testimonial: parsed.data.testimonial,
    featured: parsed.data.featured,
    display_order: parsed.data.displayOrder,
  },
});

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("POST /api/students error:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}
