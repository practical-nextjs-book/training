import { SITE_NAME } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${SITE_NAME}`,
  description: "運営企業「テックピクチャーズ株式会社」のプライバシーポリシー",
};

export default function Page() {
  return (
    <div>
      <h1>利用規約</h1>
    </div>
  );
}
