"use client"; // ★: "use client" ディレクティブを追加する

export function LikeButton({ photoId }: { photoId: string }) {
  // ★: onClick イベントハンドラーを追加したい
  return (
    <button
      onClick={() => {
        console.log(`photoId ${photoId} が「いいね」されました`);
      }}
    >
      いいね
    </button>
  );
}
