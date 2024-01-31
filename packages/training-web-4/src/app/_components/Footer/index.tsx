import Link from "next/link";
import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/privacy-policy">プライバシー・ポリシー</Link>
        </li>
        <li>
          <Link href="/company-info">運営企業</Link>
        </li>
      </ul>
    </footer>
  );
}
