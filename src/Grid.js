import React from 'react'
const Cell = React.lazy(() => import('./Cell'))

function Grid({ grid, onClick }) {
  return (
     <div className="bord">
   		{[...Array(4).keys()].map((number, yPos) => {
	return <div key={number}  className="board-row">
		{[...Array(4).keys()].map((number, xPos) => (<Cell value={grid[yPos][xPos]} onClick={() => onClick(xPos, yPos)}/>)}
	</div>
})}
    </div>
  );
}

export default Grid
