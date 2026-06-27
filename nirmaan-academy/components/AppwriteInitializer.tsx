"use client";

import { useEffect } from "react";
import { client } from "@/lib/appwrite";

export default function AppwriteInitializer() {
  useEffect(() => {
    client.ping();
  }, []);

  return null;
}
