import React from "react";
import cx from "classnames";
const Grid = React.lazy(() => import("./Grid"));

/* X is for display when i put null that broke css then X = blank case*/
class GameManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
      tab: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "X"],
    };
    this.checkmove = this.checkmove.bind(this);
  }

  /*shuffle array and create 2D matrix*/
  createArray() {
    const copy = [...this.state.tab];
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

    this.setState({
      tab: array,
    });
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

  move(old, newpos) {
    const copy = [...this.state.tab];
    copy[old.x][old.y] = "X";
    copy[newpos.x][newpos.y] = old.number;
    this.setState({
      tab: copy,
    });
    this.checkwin(copy);
  }

  // ici check si il peu move et si oui move
  checkmove(number, x, y) {
    if (this.state.win) return;
    if (
      this.state.tab[x + 1] &&
      this.state.tab[x + 1][y] &&
      this.state.tab[x + 1][y] === "X"
    ) {
      this.move({ x: x, y: y, number: number }, { x: x + 1, y: y });
    } else if (
      this.state.tab[x - 1] &&
      this.state.tab[x - 1][y] &&
      this.state.tab[x - 1][y] === "X"
    ) {
      this.move({ x: x, y: y, number: number }, { x: x - 1, y: y });
    } else if (this.state.tab[x][y + 1] && this.state.tab[x][y + 1] === "X") {
      this.move({ x: x, y: y, number: number }, { x: x, y: y + 1 });
    } else if (this.state.tab[x][y - 1] && this.state.tab[x][y - 1] === "X") {
      this.move({ x: x, y: y, number: number }, { x: x, y: y - 1 });
    } else {
      //maybee display error message when can't move
    }
  }

  componentDidMount() {
    this.createArray();
  }

  render() {
    return (
      <Suspense fallback={<div>Chargement...</div>}>
        <p className={cx("win", { hidden: !this.state.win ? true : false })}>
          GG you win =)
        </p>
        <Grid tab={this.state.tab} onClick={this.checkmove} />
      </Suspense>
    );
  }
}
export default GameManager;