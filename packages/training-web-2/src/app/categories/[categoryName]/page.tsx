import Link from "next/link";
import { getPage } from "@/utils";
import styles from "./page.module.css";

type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params, searchParams }: Props) {
  const page = getPage(searchParams);
  return (
    <div>
      <h1>カテゴリー別一覧画面</h1>
      <h2>
        カテゴリー「{params.categoryName}」の「{page}」ページ目
      </h2>
      <ul>
        <li>
          <Link href={`/photos/1`}>写真1</Link>
        </li>
        <li>
          <Link href={`/photos/2`}>写真2</Link>
        </li>
        <li>
          <Link href={`/photos/3`}>写真3</Link>
        </li>
      </ul>
      <ul className={styles.pagination}>
        {page !== 1 && (
          <li>
            <Link href={`/categories/${params.categoryName}?page=${page - 1}`}>
              前へ
            </Link>
          </li>
        )}
        <li>
          <Link href={`/categories/${params.categoryName}?page=${page + 1}`}>
            次へ
          </Link>
        </li>
      </ul>
    </div>
  );
}
