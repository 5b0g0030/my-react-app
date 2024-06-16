import React, { useState } from "react"; // 從 React 模組中引入 React 和 useState
import Board from "./Board"; // 引入 Board 組件
import "./tictactoe.css"; // 引入 tictactoe.css 樣式表

// 定義 TicTacToe 組件
function TicTacToe() {
  // 使用 useState 定義 history 狀態，初始值為一個包含 9 個 null 的數組
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 使用 useState 定義 currentMove 狀態，初始值為 0
  const [currentMove, setCurrentMove] = useState(0);
  // 獲取當前步的 squares
  const currentSquares = history[currentMove];
  // 判斷下一步是否由 X 執行
  const xIsNext = currentMove % 2 === 0;

  // 定義 handlePlay 函數，當下一步執行時更新歷史記錄和當前步數
  const handlePlay = (nextSquares) => {
    // 創建新的歷史記錄，包含至當前步數為止的記錄和下一步
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // 更新 history 狀態
    setHistory(nextHistory);
    // 更新 currentMove 狀態為下一步的索引
    setCurrentMove(nextHistory.length - 1);
  };

  // 定義 jumpTo 函數，用於跳轉到指定的步數
  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  // 生成遊戲的歷史記錄按鈕列表
  const moves = history.map((squares, move) => {
    let description;
    // 根據步數生成描述文字
    if (move > 0) {
      description = "回到第 " + move + " 步";
    } else {
      description = "遊戲開始";
    }
    return (
      <>
        {/* 每個歷史記錄生成一個列表項，並設置 key 為 move */}
        <li key={move}>
          {/* 每個按鈕點擊時調用 jumpTo 函數，並傳入相應的步數 */}
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  return (
    // 返回遊戲的主要結構
    <div className="game">
      <div className="game-board">
        {/* 渲染 Board 組件，傳入 xIsNext, currentSquares 和 handlePlay 作為屬性 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* 渲染遊戲歷程的標題 */}
        <h4>遊戲歷程</h4>
        {/* 渲染歷史記錄的按鈕列表 */}
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// 將 TicTacToe 組件導出，讓其他模組可以引入和使用
export default TicTacToe;
