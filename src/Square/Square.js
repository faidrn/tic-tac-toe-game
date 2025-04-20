import { useState } from "react";


function Square(){
    const [value, setValue] = useState(null); /* value=> almacena el valor, setValue=> es una función que puede ser usada para cambiar el valor  */
        /* El valor null pasado a useState es usado como valor inicial para esta variable de estado */


    function handleClick(){
        setValue('X'); /* Se imprimira X cuando se haga click sobre el tablero */
    }

    return (
        <button 
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
  }

  export { Square };

  /* React provee una función llamada useState q se puede llamar desde el 
    componente para dejarle recordar cosas  */