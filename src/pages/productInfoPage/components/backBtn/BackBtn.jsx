import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./BackBtn.module.scss";

export default function BackBtn({ address }) {
  // navigation
  const navigate = useNavigate();

  return (
    <button
      className={styles.king}
      onClick={() => {
        navigate(address);
      }}
    >
      <FontAwesomeIcon icon={faLeftLong} />
    </button>
  );
}
