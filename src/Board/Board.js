import { Square } from "../Square/Square.js";

function Board({ xIsNext, squares, onPlay }) {
  
    function handleClick(i){
      if (squares[i] || calculateWinner(squares)){
        // Si el cuadrado esta lleno, nos salimos de la función y no sobreescribimos en el cuadrado
        return;
      }
  
      const nextSquares = squares.slice();
  
      if (xIsNext){
        nextSquares[i] = "X";
      } else{
        nextSquares[i] = "O";
      }
      
      onPlay(nextSquares);
    }
  
  
    const winner = calculateWinner(squares);
    let status;
  
    if (winner){
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    // Usando loops para crear el Board
    const boardSize = 3; // Tamaño del tablero

    // Creación del tablero
    const boardRows = [];

    for (let row = 0; row < boardSize; row++){
      const boardSquares = [];
      for (let col = 0; col < boardSize; col ++){
        const squareIndex = row * boardSize + col;
        boardSquares.push(
          <Square 
            key={squareIndex}
            value={squares[squareIndex]} 
            onSquareClick={() => handleClick(squareIndex)}
          />
        );
      }

      boardRows.push(
        <div 
          key={row}
          className="board-row"
        >
          {boardSquares}
        </div>
      );
    }
  
  
    return (
      <> {/* Los Fragments <></> envuelven multiples elementos JSX adyacentes */}
        <div className="status">
          {status}
        </div>

        {boardRows}
      </>
    );
  }

  // Pongo la función al final para no hacer scroll cuando quiera editar el componente
function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
  
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
  
    return null;
  }

  export { Board };