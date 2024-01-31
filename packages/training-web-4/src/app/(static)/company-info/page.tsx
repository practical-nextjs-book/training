import { SITE_NAME } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `運営企業 | ${SITE_NAME}`,
  description: "運営企業「テックピクチャーズ株式会社」の会社概要",
};

export default function Page() {
  return (
    <div>
      <h1>企業概要</h1>
    </div>
  );
}
