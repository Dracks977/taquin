import cx from "classnames";

function Cell({column, x, onCellClick}) {
  const listItems = column.map((number, i) => {
    return (
      <button
        key={number}
        className={cx("square", { whithe: number === "X" ? true : false })}
        onClick={() => onCellClick(number, x, i)}
      >
        {number}
      </button>
    );
  });

  return listItems;
}

export default Cell;