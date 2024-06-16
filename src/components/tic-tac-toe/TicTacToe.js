import React, { useState } from "react"; // 從 'react' 庫中匯入 React 和 useState Hook
import Board from "./Board"; // 從本地檔案 './Board' 中匯入 Board 元件
import "./tictactoe.css"; // 匯入 tic-tac-toe 的 CSS 樣式

function TicTacToe() { // 定義一個名為 TicTacToe 的函數元件
  const [history, setHistory] = useState([Array(9).fill(null)]); // 使用 useState Hook 定義 history 狀態，初始值為一個包含 9 個 null 的陣列，並定義其設定函數 setHistory
  const [currentMove, setCurrentMove] = useState(0); // 使用 useState Hook 定義 currentMove 狀態，初始值為 0，並定義其設定函數 setCurrentMove
  const currentSquares = history[currentMove]; // 取得當前步數的棋盤狀態
  const xIsNext = currentMove % 2 === 0; // 根據當前步數計算是否輪到 X 下棋

  const handlePlay = (nextSquares) => { // 定義一個名為 handlePlay 的函數，接受 nextSquares 作為參數
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 建立新的歷史紀錄，包含目前步數之前的所有步數和新的棋盤狀態
    setHistory(nextHistory); // 更新 history 狀態
    setCurrentMove(nextHistory.length - 1); // 更新 currentMove 狀態為新的步數
  };

  return ( // 返回 JSX 元素
    <div className="game"> // 渲染包含類名 'game' 的 div 元素
      <div className="game-board"> // 渲染包含類名 'game-board' 的 div 元素
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> // 渲染 Board 元件，並傳入 xIsNext, currentSquares 和 handlePlay 作為屬性
      </div>
    </div>
  );
}

export default TicTacToe; // 將 TicTacToe 元件作為預設匯出
