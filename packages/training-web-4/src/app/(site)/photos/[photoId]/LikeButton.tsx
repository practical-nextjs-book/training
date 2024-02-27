"use client";

export function LikeButton({ photoId }: { photoId: string }) {
  return (
    <button
      onClick={() => {
        // ★: 3000番ポートで動いている、自ホストサーバー（Next.js）へリクエスト
        fetch(`/api/photos/${photoId}/like`, {
          method: "POST",
        });
      }}
    >
      いいね
    </button>
  );
}
