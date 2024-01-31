// 「3-2-2-2.Route Groups 専用のレイアウトをネストする」で解説されている「Layout B」ファイル

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

// 静的要素のみで構成される(static)配下で全適用されるレイアウト
export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
