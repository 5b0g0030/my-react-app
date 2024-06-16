import React from "react"; // 從 React 模組中引入 React
import "./tictactoe.css"; // 引入 tictactoe.css 樣式表

// 定義一個 Square 組件，接收兩個參數：value 和 onSquareClick
function Square({ value, onSquareClick }) {
  return (
    // 返回一個按鈕元素，className 設置為 "square"，當按鈕被點擊時觸發 onSquareClick 函數
    <button className="square" onClick={onSquareClick}>
      {value} {/* 按鈕內顯示 value 的值 */}
    </button>
  );
}

// 將 Square 組件導出，讓其他模組可以引入和使用
export default Square;
