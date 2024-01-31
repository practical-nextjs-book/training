import Link from "next/link";

// 📌:Segment の画面を提供するファイル
export default function Page() {
  return (
    <div>
      <h1>トップ画面</h1>
      <ul>
        <li>
          {/* 📌:Route の /photos/[photoId] に遷移する */}
          <Link href={`/photos/1`}>写真1</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li>
        <li>
          <Link href={`/photos/3`}>写真3</Link>
        </li>
      </ul>
    </div>
  );
}
