import React from "react"; // 從 'react' 庫中匯入 React
import "./tictactoe.css"; // 匯入 tic-tac-toe 的 CSS 樣式

function Square({ value, onSquareClick }) { // 定義一個名為 Square 的函數元件，接受 value 和 onSquareClick 作為屬性
  return ( // 返回 JSX 元素
    <button className="square" onClick={onSquareClick}> // 渲染一個按鈕元素，類名為 'square'，並設置 onClick 屬性為 onSquareClick
      {value} // 按鈕的顯示文字為傳入的 value
    </button>
  );
}

export default Square; // 將 Square 元件作為預設匯出
