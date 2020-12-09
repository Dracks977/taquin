import Cell from "./Cell";

function Grid(props) {
  const listItems = props.gamestade.map((number, i) => {
    return (
      <div key={number} className="board-row">
        <Cell value={number} x={i} onCellClick={props.onCellClick} />
      </div>
    );
  });

  return <div className="bord">{listItems}</div>;
}

export default Grid;