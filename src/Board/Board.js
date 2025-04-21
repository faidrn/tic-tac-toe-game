import { Square } from "../Square/Square.js";

function Board({ xIsNext, squares, onPlay }) {
  
    function handleClick(i){
      const { winner } = calculateWinner(squares);
      if (squares[i] || winner){
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
  
  
    const  {winner, winningSquares } = calculateWinner(squares);
    const status = winner 
      ?  `Winner: ${winner}` 
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
    

    // Usando loops para crear el Board
    const boardSize = 3; // Tamaño del tablero

    // Creación del tablero
    const boardRows = [];

    // Este bucle crea las filas del tablero
    for (let row = 0; row < boardSize; row++){
      const boardSquares = [];

      // Este bucle crea los cuadros dentro del tablero
      for (let col = 0; col < boardSize; col ++){
        const squareIndex = row * boardSize + col; // Calculo del indice de cada cuadrado
        const isWinningSquare = winningSquares && winningSquares.includes(squareIndex); // .includes() esta verificando si el array winningSquares (que contiene los índices de los cuadrados ganadores) incluye el índice del cuadrado actual (squareIndex). Si es así, el cuadrado será resaltado.
            // El operador && primero evalúa el valor a su izquierda (winningSquares). Si este valor es null, undefined, false, 0, NaN o una cadena vacía (""), devuelve ese valor directamente. Si no, evalúa y devuelve el valor a su derecha (winningSquares.includes(squareIndex)).

        // Para cada fila, se crea un array de cuadros
        boardSquares.push(
          <Square 
            key={squareIndex}
            value={squares[squareIndex]} 
            isWinner={isWinningSquare}
            onSquareClick={() => handleClick(squareIndex)}
          />
        );
      }
      
      // Se crea un array de filas que contendran los cuadros
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
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontales
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticales
      [0, 4, 8], [2, 4, 6]             // diagonales
    ];
  
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
  
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return {
          winner: squares[a], 
          winningSquares: lines[i]  // Devuelve los indices de los cuadrados ganadores
        };
      }
    }
  
    return { winner: null, winningSquares: null };
  }

  export { Board };