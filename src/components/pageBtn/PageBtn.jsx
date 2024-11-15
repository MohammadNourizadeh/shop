import styles from "./PageBtn.module.scss";

export default function PageBtn({ pageNum }) {
  return <button className={styles.king}>{pageNum}</button>;
}
