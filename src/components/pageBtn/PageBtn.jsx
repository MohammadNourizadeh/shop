import styles from "./PageBtn.module.scss";

export default function PageBtn({ pageNum, onChange }) {
  return (
    <button
      className={styles.king}
      onClick={() => {
        onChange(pageNum);
      }}
    >
      {pageNum}
    </button>
  );
}
