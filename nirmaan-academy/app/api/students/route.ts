import { NextResponse } from "next/server";
import { query } from "@/lib/prisma";
import { createStudentSchema } from "@/lib/validations/student";

export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM student_data ORDER BY display_order ASC'
    );
    return NextResponse.json(result.rows);
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

    const d = parsed.data;
    const result = await query(
      `INSERT INTO student_data (student_name, image_url, course, rank, marks, college_name, branch_name, admission_year, achievement_year, testimonial, featured, display_order)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [d.studentName, d.imageUrl, d.course, d.rank, d.marks, d.collegeName, d.branchName, d.admissionYear, d.achievementYear, d.testimonial, d.featured, d.displayOrder]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("POST /api/students error:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}
