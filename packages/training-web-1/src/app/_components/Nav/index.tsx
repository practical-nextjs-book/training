import Link from "next/link";
import styles from "./style.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">トップ</Link>
        </li>
        <li>
          <Link href="/categories">カテゴリー一覧</Link>
        </li>
      </ul>
    </nav>
  );
}
