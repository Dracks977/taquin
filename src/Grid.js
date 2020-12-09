import React from 'react'
const Cell = React.lazy(() => import('./Cell'))

function Grid({ grid }) {
  return (
     <div className="bord">
   		{[...Array(4).keys().map((number, yPos) => {
	return <div key={number}  className="board-row">
		{[...Array(4).keys()].map((number, xPos) => (<Cell value={grid[yPos][xPos]} onClick={() => props.onClick(xPos, yPos)}/>)}
	</div>
})}
    </div>
  );
}

export default Grid
