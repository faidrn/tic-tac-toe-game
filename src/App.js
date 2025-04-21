import { useState } from "react";
import { Board } from "./Board/Board";


export default function Games(){
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]); // Se crrea un array q contiene todos los items de history
    setXIsNext(!xIsNext);
  }
  

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
                    {/* TODO */}
                </ol>
            </div>
        </div>
    );
}