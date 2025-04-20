function Square({ value, onSquareClick }){

    return (
        <button 
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
  }

  export { Square };

  /* React provee una función llamada useState q se puede llamar desde el 
    componente para dejarle recordar cosas  */