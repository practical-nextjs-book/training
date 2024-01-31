import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <h1>カテゴリー一覧画面</h1>
      <ul>
        <li>
          <Link href="/categories/flower">花</Link>
        </li>
        <li>
          <Link href="/categories/animal">動物</Link>
        </li>
        <li>
          <Link href="/categories/landscape">風景</Link>
        </li>
      </ul>
    </div>
  );
}
