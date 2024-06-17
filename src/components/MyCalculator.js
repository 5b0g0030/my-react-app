// 從 'react' 模組中引入 React 和 useState
import React, { useState } from "react";
// 引入 MyDisplay 組件
import MyDisplay from "./MyDisplay";
// 引入 MyButton 組件
import MyButton from "./MyButton";
// 引入 CSS 樣式表 'MyCalculator.css'
import "./MyCalculator.css";

// 定義一個名為 MyCalculator 的函數式元件
function MyCalculator() {
  // 使用 useState 定義狀態變數 result，初始值為 "0"
  const [result, setResult] = useState("0");

  // handleClick 是 MyButton 的事件處理函式
  const handleClick = (value) => {
    // 使用 switch 判斷點擊按鈕的值
    switch (value) {
      // 如果按鈕值是數字或操作符
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
        // 如果結果是 "0"，則將結果設置為按鈕值
        if (result === "0") {
          setResult(value);
        // 否則，將按鈕值附加到結果後面
        } else {
          setResult(result + value);
        }
        break;
      // 如果按鈕值是 "="，計算結果並設置為新的結果
      case "=":
        setResult(eval(result).toString());
        break;
      // 如果按鈕值是 "c"，清空結果
      case "c":
        setResult("");
        break;
      // 如果按鈕值是 "+/-"，將結果轉為相反數
      case "+/-":
        setResult((parseInt(result, 10) * -1).toString());
        break;
      // 如果按鈕值是 "%" ，將結果轉為百分比
      case "%":
        setResult((parseInt(result, 10) / 100).toString());
        break;
      // 預設情況下，不做任何處理
      default:
        break;
    }
  };

  // 返回一個 JSX，包含 MyDisplay 和 MyButton 組件
  return (
    <div className="calculator">
      {/* 傳遞 result 作為屬性給 MyDisplay 組件 */}
      <MyDisplay result={result} />
      {/* 傳遞 handleClick 函式作為屬性給 MyButton 組件 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

// 將 MyCalculator 組件作為預設導出
export default MyCalculator;
