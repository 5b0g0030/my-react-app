import React, { useState } from "react"; // 從 React 庫中導入 React 和 useState 鉤子
import MyDisplay from "./MyDisplay"; // 導入自定義的 MyDisplay 組件
import MyButton from "./MyButton"; // 導入自定義的 MyButton 組件
import "./MyCalculator.css"; // 導入 MyCalculator 組件的 CSS 樣式

function MyCalculator() {
  const [result, setResult] = useState("0"); // 使用 useState 鉤子初始化計算結果為 "0"
  
  // handleClick 是 MyButton 的事件處理常式
  const handleClick = (value) => {
    // 根據按鈕的值進行不同的操作
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        if (result === "0") { // 如果當前結果為 "0"，則直接設置為按鈕的值
          setResult(value);
        } else { // 否則，將按鈕的值附加到當前結果之後
          setResult(result + value);
        }
        break;
      case "=": // 處理等號按鈕
        setResult(eval(result).toString()); // 使用 eval 函數計算結果，並轉換為字符串
        break;
      case "c": // 處理清除按鈕
        setResult(""); // 將結果設置為空字符串
        break;
      case "+/-": // 處理正負號切換按鈕
        setResult(parseInt(result, 10) * -1); // 將結果轉換為負數
        break;
      case "%": // 處理百分比按鈕
        setResult(parseInt(result, 10) / 100); // 將結果轉換為百分比
        break;
      default:
        break; // 默認情況下不做任何操作
    }
  };
  
  return (
    <div className="calculator"> {/* 設置計算器的 CSS 樣式 */}
      <MyDisplay result={result} /> {/* 渲染 MyDisplay 組件，並傳遞計算結果 */}
      <MyButton buttonClicked={handleClick} /> {/* 渲染 MyButton 組件，並傳遞事件處理函數 */}
    </div>
  );
}

export default MyCalculator; // 將 MyCalculator 組件作為默認導出
