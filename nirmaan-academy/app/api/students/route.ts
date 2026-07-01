import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createStudentSchema } from "@/lib/validations/student";

export async function GET() {
  try {
    const students = await prisma.studentData.findMany({
      orderBy: { displayOrder: "asc" },
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

    const student = await prisma.studentData.create({
      data: parsed.data,
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
