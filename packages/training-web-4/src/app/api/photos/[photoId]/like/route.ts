import type { NextRequest } from "next/server";

export async function POST(
  _: NextRequest,
  { params }: { params: { photoId: string } },
) {
  console.log(`photoId ${params.photoId} が「いいね」されました`);
  // 🚧 TODO: 誰から送られたリクエストかを cookie から特定する処理
  // 🚧 TODO: DBサーバーなどに永続化するための処理
  return Response.json({ liked: true });
}
