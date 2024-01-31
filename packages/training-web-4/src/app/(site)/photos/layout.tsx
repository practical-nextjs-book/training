import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

// 「/photos」配下で全適用されるレイアウト
export default function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
