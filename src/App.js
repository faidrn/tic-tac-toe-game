import { useState } from "react";
import { Board } from "./Board/Board";


export default function Games(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove]; // se renderiza el movimiento actual en lugar del movimiento final

    function handlePlay(nextSquares){
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; //se conserva la parte de la hstoria anterior
      setHistory(nextHistory); 
      setCurrentMove(nextHistory.length - 1);
      setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove){
      setCurrentMove(nextMove);
      setXIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((squares, move) => {
      let description;

      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }

      return (
        <li key={move}>
          <button 
            onClick={() => jumpTo(move)}
          >
            {description}
          </button>
        </li>
      );
    });
    

    return(
        <div className="game">
            <div className="game-board">
                <Board 
                  xIsNext={xIsNext} 
                  squares={currentSquares} 
                  onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
}