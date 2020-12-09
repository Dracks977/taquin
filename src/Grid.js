import React from 'react'
const Cell = React.lazy(() => import('./Cell'))

function Grid({ grid }) {
  return (
     <div className="bord">
   		{grid.map((number, xPos) => {
	return <div key={number}  className="board-row">
		{[...Array(3).keys()].map((number, yPos) => (<Cell value={number} onClick={() => props.onClick(xPos, yPos)}/>)}
	</div>
})}
    </div>
  );
}

export default Grid
