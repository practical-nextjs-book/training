import Link from "next/link";
import type { Category } from "@/type";

async function getCategories() {
  const data: { categories: Category[] } = await fetch(
    `http://localhost:8080/api/categories`,
  ).then((res) => res.json());
  return data.categories;
}

export default async function Page() {
  const categories = await getCategories();
  return (
    <div>
      <h1>カテゴリー一覧画面</h1>
      <ul>
        {categories.map(({ id, label, name }) => (
          <li key={id}>
            <Link href={`/categories/${name}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
