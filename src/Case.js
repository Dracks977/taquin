import cx from 'classnames'

function Grid(props) {

const listItems = props.value.map((number, i) => {
	return <button
	key={number} 
	className={cx("square", {whithe: number==="X"?true:false})}
	onClick={() => props.onClick(number, props.x, i)}
	>
		{number}
	</button>
});
	

  return (
     listItems
  );
}

export default Grid