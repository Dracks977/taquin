import cx from "classnames";

function Cell(props) {
  const listItems = props.value.map((number, i) => {
    return (
      <button
        key={number}
        className={cx("square", { whithe: number === "X" ? true : false })}
        onClick={() => props.onCellClick(number, props.x, i)}
      >
        {number}
      </button>
    );
  });

  return listItems;
}

export default Cell;