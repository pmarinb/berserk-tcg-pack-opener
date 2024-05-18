import "../App.css";

const CardTracker = ({ cardCounter }) => {
  return (
    <div>
      <ul>
        <h2 className="red">Card Tracker</h2>
        <li className="common">
          Common: {cardCounter.common.length} / {cardCounter.common_total}{" "}
          {cardCounter.common.length === cardCounter.common_total ? " ✅" : ""}
        </li>
        <li className="uncommon">
          Uncommon: {cardCounter.uncommon.length} / {cardCounter.uncommon_total}{" "}
          {cardCounter.uncommon.length === cardCounter.uncommon_total
            ? " ✅"
            : ""}
        </li>
        <li className="rare">
          Rare: {cardCounter.rare.length} / {cardCounter.rare_total}{" "}
          {cardCounter.rare.length === cardCounter.rare_total ? " ✅" : ""}
        </li>
        <li className="parallel">
          Parallel: {cardCounter.parallel.length} / {cardCounter.parallel_total}{" "}
          {cardCounter.parallel.length === cardCounter.parallel_total
            ? " ✅"
            : ""}
        </li>
        <li className="red">
          Total: {cardCounter.current} / {cardCounter.total}{" "}
          {cardCounter.current === cardCounter.total ? " ✅" : ""}
        </li>
      </ul>
    </div>
  );
};

export default CardTracker;
