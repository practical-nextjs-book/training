import Link from "next/link";
import type { Category, Photo } from "@/type";
import { LikeButton } from "./LikeButton";
import styles from "./page.module.css";
import type { Metadata } from "next";

async function getPhoto(photoId: string) {
  const data: { photo: Photo } = await fetch(
    `http://localhost:8080/api/photos/${photoId}`,
  ).then((res) => res.json());
  return data.photo;
}

async function getCategory(categoryId: string) {
  const data: { category: Category } = await fetch(
    `http://localhost:8080/api/categories/id/${categoryId}`,
  ).then((res) => res.json());
  return data.category;
}

type Props = {
  params: { photoId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const photo = await getPhoto(params.photoId);
  return {
    title: photo.title,
    description: photo.description,
  };
}

export default async function Page({ params }: Props) {
  const photo = await getPhoto(params.photoId);
  const category = await getCategory(photo.categoryId);
  return (
    <div>
      <h1>写真ID「{photo.title}」の詳細画面</h1>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>概要</th>
            <td>{photo.description}</td>
          </tr>
          <tr>
            <th>カテゴリー</th>
            <td>
              <Link href={`/categories/${category.name}`}>
                {category.label}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <LikeButton photoId={params.photoId} />
    </div>
  );
}
