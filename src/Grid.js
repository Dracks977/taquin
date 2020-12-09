import React from 'react'
const Cell = React.lazy(() => import('./Cell'))

function Grid(props) {
const listItems = props.grid.map((number, i) => {
	return <div key={number}  className="board-row">
		<Cell value={number} x={i} onClick={props.onClick}/>
	</div>
});


  return (
     <div className="bord">
   		{listItems}
    </div>
  );
}

export default Grid