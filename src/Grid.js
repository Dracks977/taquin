import React, { Suspense } from 'react';
const Case = React.lazy(() => import('./Case'));

function Grid(props) {
console.log(props.grid)
const listItems = props.grid.map((number, i) => {
	return <div key={number}  className="board-row">
		<Case value={number} x={i} onClick={props.onClick}/>
	</div>
});


  return (
     <div className="bord">
   		{listItems}
    </div>
  );
}

export default Grid;