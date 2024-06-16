import React, { useState } from "react"; // 從 React 模組中引入 React 和 useState
import MyDisplay from "./MyDisplay"; // 引入 MyDisplay 組件
import MyButton from "./MyButton"; // 引入 MyButton 組件
import "./MyCalculator.css"; // 引入 MyCalculator.css 樣式表

// 定義 MyCalculator 組件
function MyCalculator() {
  // 使用 useState 定義 result 狀態，初始值為 "0"
  const [result, setResult] = useState("0");

  // handleClick 是 MyButton 組件的事件處理函式
  const handleClick = (value) => {
    // alert(value); // 可選：彈出被點擊按鈕的值

    // 使用 switch 分支處理不同的按鈕值
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
        // 如果結果為 "0"，則將結果設置為當前按鈕值；否則將當前按鈕值附加到結果後面
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // 使用 eval 函式計算結果並轉換為字串形式
        setResult(eval(result).toString());
        break;
      case "c":
        // 清空結果
        setResult("");
        break;
      case "+/-":
        // 將結果轉換為整數並乘以 -1
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // 將結果轉換為整數並除以 100
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  // 返回 MyCalculator 組件的 JSX 結構
  return (
    <div className="calculator">
      {/* 渲染 MyDisplay 組件，傳遞 result 狀態作為屬性 */}
      <MyDisplay result={result} />
      {/* 渲染 MyButton 組件，傳遞 handleClick 函式作為屬性 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

// 將 MyCalculator 組件導出，以便其他模組引入和使用
export default MyCalculator;
