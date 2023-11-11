import { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/board-component';
import { Board } from './models/board';
import { Colors } from './models/colors';
import { Player } from './models/player';
import LostFigures from './components/lost-figures';
import Timer from './components/timer';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      ></BoardComponent>
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <div>
        <LostFigures title='Black figures' figures={board.lostBlackFigures}/>
        <LostFigures title='White figures' figures={board.lostWhiteFigures}/>
      </div>
    </div>
  );
}

export default App;
