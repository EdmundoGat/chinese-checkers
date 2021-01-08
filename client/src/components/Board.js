import {useState, useEffect} from 'react';
import Tile from './Tile';
import produce from "immer";

function Board() {

  const BOARD_SIZE = 25;

  const [board, setBoard] = useState(getInitialBoard());

  const [bufferState, setBufferState] = useState(-1);

  const [bufferTile, setBufferTile] = useState([-1,-1]);

  function getInitialBoard(){

    let board = [];

    board[0] = new Array(BOARD_SIZE).fill(-1)

    board[1] = createRow(1,"g")
    board[2] = createRow(2,"g")
    board[3] = createRow(3,"g")
    board[4] = createRow(4,"g")

    board[5] = createRow(13,0)
    board[6] = createRow(12,0)
    board[7] = createRow(11,0)
    board[8] = createRow(10,0)

    board[9] = createRow(9,0)

    board[10] = createRow(10,0)
    board[11] = createRow(11,0)
    board[12] = createRow(12,0)
    board[13] = createRow(13,0)
    
    board[14] = createRow(4,"r")
    board[15] = createRow(3,"r")
    board[16] = createRow(2,"r")
    board[17] = createRow(1,"r")

    board[18] = new Array(BOARD_SIZE).fill(-1)
    
    return board;
  }

  function createRow(playableTiles, symbol){

    var array = new Array(BOARD_SIZE).fill(-1);

    var middle = 2*playableTiles - 1;

    var padding = (BOARD_SIZE - middle)/2;

    var cont = 0;

    for(var i=padding; i < padding + middle; i++){

      if(cont % 2 === 0) array[i] = symbol;

      cont++;

    }

    return array;

  }

  useEffect(() => {
    
  },[]);
  
  return (
    <div
    >
    {board.map((rows, i) =>(
      <div key={"r-" + i}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 35px)`
      }}
      >
      {rows.map((val, k) => (
        <div 
          key={i*BOARD_SIZE+k}
          onClick={() => {

            if(bufferState === -1 || bufferState === 0){

              setBufferState(val);
              setBufferTile([i,k]);

            }else{

              const newBoard = produce(board, boardCopy => {
                if(boardCopy[i][k] === 0){
                  boardCopy[i][k] = bufferState;
                  boardCopy[bufferTile[0]][bufferTile[1]] = 0;
                }
              });
              setBufferState(-1);
              setBufferTile([-1,-1]);
              setBoard(newBoard);

            }

          }}
        >
          <Tile tileState = {val}/>
        </div>
      ))}
      </div>
      )
    )
    }
    </div>
  );
}

export default Board;