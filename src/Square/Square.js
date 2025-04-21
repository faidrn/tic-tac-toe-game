function Square({ value, isWinner, onSquareClick }){

    return (
        <button 
            className={`square ${isWinner ? 'winner-square' : ''}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
  }

  export { Square };