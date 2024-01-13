export default function Log({ turns }) {
  let logItem = null;
  for (const turn in turns) {
    logItem = <li>{...turn}</li>;
  }

  return <ol id="log">{turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selecionou {turn.square.row + 1}, {turn.square.col + 1}</li>)}</ol>;
}
