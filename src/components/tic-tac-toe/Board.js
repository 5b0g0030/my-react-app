import React from "react"; // 從 'react' 庫中匯入 React
import Square from "./Square"; // 從本地檔案 './Square' 中匯入 Square 元件
import "./tictactoe.css"; // 匯入 tic-tac-toe 的 CSS 樣式

function Board({ xIsNext, squares, onPlay }) { // 定義一個名為 Board 的函數元件，接受 xIsNext, squares 和 onPlay 作為屬性
  const handleClick = (i) => { // 定義一個名為 handleClick 的函數，接受一個參數 i
    const nextSquares = squares.slice(); // 複製 squares 陣列到 nextSquares
    if (xIsNext) { // 如果 xIsNext 為 true
      nextSquares[i] = "X"; // 設置 nextSquares 陣列中索引為 i 的元素為 "X"
    } else { // 如果 xIsNext 為 false
      nextSquares[i] = "O"; // 設置 nextSquares 陣列中索引為 i 的元素為 "O"
    }
    onPlay(nextSquares); // 調用 onPlay 函數並傳遞 nextSquares
  };

  let status = "下一個玩家: " + (xIsNext ? "X" : "O"); // 設置狀態訊息，顯示下一個玩家是 "X" 還是 "O"
  return ( // 返回 JSX 元素
    <>
      <div className="status">{status}</div> // 顯示狀態訊息的 div 元素，類名為 'status'
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> // 渲染 Square 元件，並設置 value 和 onSquareClick 屬性
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> // 渲染 Square 元件，並設置 value 和 onSquareClick 屬性
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> // 渲染 Square 元件，並設置 value 和 onSquareClick 屬性
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
export default Board; // 將 Board 元件作為預設匯出
