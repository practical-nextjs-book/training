import { photos } from "@/_mock/photos";

export async function GET() {
  console.log("GET /api/photos");
  // 🚧: DBに接続しレコードを取得する
  return Response.json({ photos });
}
