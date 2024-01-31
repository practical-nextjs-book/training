"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

function getAriaCurrent(flag: boolean) {
  return flag ? { "aria-current": "page" as const } : undefined;
}

export function Nav() {
  const pathName = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" {...getAriaCurrent(pathName === "/")}>
            トップ
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            {...getAriaCurrent(pathName.startsWith("/categories"))}
          >
            カテゴリー一覧
          </Link>
        </li>
      </ul>
    </nav>
  );
}
