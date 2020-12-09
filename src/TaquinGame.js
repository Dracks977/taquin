import React from "react";
import cx from "classnames";
import Grid from "./Grid";

class TaquinGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
      tab: createArray(),
    };
    this.move = this.move.bind(this);
  }

  checkwin(array) {
    array = array.flat();
    if (array[array.length - 1] !== "X") return;
    array.pop();
    let isSorted =
      array.every((v, i) => i === 0 || v <= array[i - 1]) ||
      array.every((v, i) => i === 0 || v >= array[i - 1]);
    if (!isSorted) return;
    this.setState({
      win: true,
    });
  }

  move(number, x, y) {
    if (this.state.win || number === "X") return; // if already win or click on blank cell
    let newpos = this.checkmove(x, y);
    if (!newpos) return; // if false we can't move
    const copy = [...this.state.tab];
    copy[x][y] = "X";
    copy[newpos.x][newpos.y] = number;
    this.setState({
      tab: copy,
    });
    this.checkwin(copy);
  }

  // return blank position or false
  checkmove(x, y) {
    if (
      this.state.tab[x + 1] &&
      this.state.tab[x + 1][y] &&
      this.state.tab[x + 1][y] === "X"
    ) {
      return { x: x + 1, y: y };
    } else if (
      this.state.tab[x - 1] &&
      this.state.tab[x - 1][y] &&
      this.state.tab[x - 1][y] === "X"
    ) {
      return { x: x - 1, y: y };
    } else if (this.state.tab[x][y + 1] && this.state.tab[x][y + 1] === "X") {
      return { x: x, y: y + 1 };
    } else if (this.state.tab[x][y - 1] && this.state.tab[x][y - 1] === "X") {
      return { x: x, y: y - 1 };
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <p className={cx("win", { hidden: !this.state.win })}>GG you win =)</p>
        <Grid gamestade={this.state.tab} onCellClick={this.move} />
      </div>
    );
  }
}

/*shuffle flat array and create 2D matrix*/
function createArray() {
  const copy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "X"];
  let j, x, i;
  for (i = copy.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = copy[i];
    copy[i] = copy[j];
    copy[j] = x;
  }

  let array = [[], [], [], []];
  let split = 0;
  for (let k in copy) {
    array[split].push(copy[k]);
    split++;
    if (split >= 4) split = 0;
  }

  return array;
}

export default TaquinGame;