import React from "react"; // 從 react 庫中導入 React
import Square from "./Square"; // 導入自定義的 Square 組件
import "./tictactoe.css"; // 導入棋盤的 CSS 樣式

function Board({ xIsNext, squares, onPlay }) { // 定義 Board 組件，接收 xIsNext, squares 和 onPlay 作為 props
  const handleClick = (i) => { // 定義處理方格點擊事件的函數
    if (calculateWinner(squares) || squares[i]) { // 如果已經有贏家或者方格已被佔用，則返回
      return;
    }
    const nextSquares = squares.slice(); // 複製當前方格的狀態
    if (xIsNext) { // 如果輪到 X 玩
      nextSquares[i] = "X"; // 將方格設置為 "X"
    } else { // 如果輪到 O 玩
      nextSquares[i] = "O"; // 將方格設置為 "O"
    }
    onPlay(nextSquares); // 調用 onPlay 函數更新方格狀態
  };

  const calculateWinner = (squares) => { // 定義計算贏家的函數
    const lines = [ // 定義所有可能的贏家組合
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <= lines.length - 1; i++) { // 遍歷所有贏家組合
      const [a, b, c] = lines[i]; // 取得每個組合的三個方格
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) // 如果三個方格的值相同，且不為空
        return squares[a]; // 返回贏家
    }
    return null; // 如果沒有贏家，返回 null
  };

  const winner = calculateWinner(squares); // 計算當前的贏家
  let status = winner // 根據贏家情況設置狀態
    ? `贏家: ${winner}` // 如果有贏家，顯示贏家
    : `下一個玩家: ${xIsNext ? "X" : "O"}`; // 如果沒有贏家，顯示下一個玩家

  return (
    <>
      <div className="status">{status}</div> {/* 顯示遊戲狀態 */}
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/* 渲染第一個方格 */}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> {/* 渲染第二個方格 */}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> {/* 渲染第三個方格 */}
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> {/* 渲染第四個方格 */}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} /> {/* 渲染第五個方格 */}
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} /> {/* 渲染第六個方格 */}
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> {/* 渲染第七個方格 */}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> {/* 渲染第八個方格 */}
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} /> {/* 渲染第九個方格 */}
      </div>
    </>
  );
}
export default Board; // 將 Board 組件作為默認導出
