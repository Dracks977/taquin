import Cell from "./Cell";

function Grid({gamestade, onCellClick}) {
  const listItems = gamestade.map((number, i) => {
    return (
      <div key={number} className="board-row">
        <Cell column={number} x={i} onCellClick={onCellClick} />
      </div>
    );
  });

  return <div className="bord">{listItems}</div>;
}

export default Grid;