import { Square } from "./Square/Square";


export default function Board() {
  return (
    <> {/* Los Fragments <></> envuelven multiples elementos JSX adyacentes */}
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
