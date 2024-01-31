import Link from "next/link";
import { LikeButton } from "./LikeButton";
import styles from "./page.module.css";

type Props = {
  params: { photoId: string };
};

export default async function Page({ params }: Props) {
  return (
    <div>
      <h1>写真ID「{params.photoId}」の詳細画面</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>概要</th>
            <td>概要テキスト</td>
          </tr>
          <tr>
            <th>カテゴリー</th>
            <td>
              <Link href={`/categories/flower`}>花</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <LikeButton photoId={params.photoId} />
    </div>
  );
}
