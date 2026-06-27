import { NextResponse } from "next/server";
import { storage } from "@/lib/appwrite";

const ENDPOINT = "https://nyc.cloud.appwrite.io/v1";
const PROJECT_ID = "6a339cd30006050b3827";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatTitle(name: string): string {
  const withoutExt = name.replace(/\.[^/.]+$/, "");
  const spaced = withoutExt.replace(/([a-z])([A-Z])/g, "$1 $2");
  const cleaned = spaced.replace(/\s*[Pp][Dd][Ff]\s*/g, " ").trim();
  return cleaned.replace(/\s+/g, " ");
}

export async function GET() {
  try {
    const bucketId = process.env.APPWRITE_BUCKET_ID;
    if (!bucketId) {
      return NextResponse.json(
        { error: "APPWRITE_BUCKET_ID not configured" },
        { status: 500 }
      );
    }

    const response = await storage.listFiles(bucketId);

    const files = response.files.map((file) => ({
      id: file.$id,
      title: formatTitle(file.name),
      fileName: file.name,
      fileSize: formatSize(file.sizeOriginal),
      fileType: file.mimeType?.includes("pdf") ? "PDF" : file.mimeType,
      downloadUrl: `${ENDPOINT}/storage/buckets/${bucketId}/files/${file.$id}/download?project=${PROJECT_ID}`,
    }));

    return NextResponse.json({ files });
  } catch (error) {
    console.error("Downloads API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch downloads" },
      { status: 500 }
    );
  }
}
