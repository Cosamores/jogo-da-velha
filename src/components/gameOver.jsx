export default function GameOver({ winner, onRematch }) {
  return (
  <div id="game-over">
    <h2>Fim do jogo</h2>
    {winner && <p>{winner} venceu!</p>}    
    {!winner && <p>EMPATE!</p>}
    <p>
      <button onClick={onRematch}>Jogar novamente</button>
    </p>
  </div>
  )
} 