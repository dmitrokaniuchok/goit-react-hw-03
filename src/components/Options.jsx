import styles from "./Options.module.css";

export default function Options({ leaveFeedback, total, reset }) {
  return (
    <div className={styles.buttoncontainer}>
      <button onClick={() => leaveFeedback("good")}>Good</button>
      <button onClick={() => leaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => leaveFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
