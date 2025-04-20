import { useState } from "react";
import { Square } from "./Square/Square";


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); /* crea un arreglo de 9 elementos y establece cada elemento a null */
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i){
    if (squares[i]){
      // Si el cuadrado esta lleno, nos salimos de la función y no sobreescribimos en el cuadrado
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext){
      nextSquares[i] = "X";
    } else{
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  return (
    <> {/* Los Fragments <></> envuelven multiples elementos JSX adyacentes */}
      <div className="board-row">
        <Square 
          value={squares[0]} 
          onSquareClick={() => handleClick(0)}
      />
        <Square 
          value={squares[1]} 
          onSquareClick={() => handleClick(1)}
        />
        <Square 
          value={squares[2]} 
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square 
          value={squares[3]} 
          onSquareClick={() => handleClick(3)}
        />
        <Square 
          value={squares[4]} 
          onSquareClick={() => handleClick(4)}
        />
        <Square 
          value={squares[5]} 
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square 
          value={squares[6]} 
          onSquareClick={() => handleClick(6)}
        />
        <Square 
          value={squares[7]} 
          onSquareClick={() => handleClick(7)}
        />
        <Square 
          value={squares[8]} 
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}
