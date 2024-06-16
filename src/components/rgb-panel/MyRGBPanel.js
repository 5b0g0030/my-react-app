import React from "react"; // 從 'react' 庫中匯入 React
import { useState } from "react"; // 從 'react' 庫中匯入 useState Hook
import MySlider from "./MySlider"; // 從本地檔案 './MySlider' 中匯入 MySlider 元件

function MyRGBPanel() { // 定義一個名為 MyRGBPanel 的函數元件
    const [r, setR] = useState(128); // 使用 useState Hook 定義狀態 r，初始值為 128，並定義其設定函數 setR
    const [g, setG] = useState(128); // 使用 useState Hook 定義狀態 g，初始值為 128，並定義其設定函數 setG
    const [b, setB] = useState(128); // 使用 useState Hook 定義狀態 b，初始值為 128，並定義其設定函數 setB

    const updateR = (v) => setR(v); // 定義一個函數 updateR，用來更新狀態 r 的值
    const updateG = (v) => setG(v); // 定義一個函數 updateG，用來更新狀態 g 的值
    const updateB = (v) => setB(v); // 定義一個函數 updateB，用來更新狀態 b 的值

    const rgbCss = { // 定義一個包含 CSS 樣式的物件 rgbCss
        border: "1px solid blue", // 設置邊框為藍色，寬度為 1px，實線
        borderRadius: "20px", // 設置邊框圓角半徑為 20px
        width: "300px", // 設置寬度為 300px
        display: "flex", // 設置顯示為 flex 布局
        flexDirection: "column", // 設置主軸方向為縱向
        padding: "20px", // 設置內邊距為 20px
        justifyContent: "center", // 設置主軸對齊方式為居中
        alignItems: "center", // 設置交叉軸對齊方式為居中
        margin: "auto", // 設置自動外邊距，元素將居中對齊
    };
  
  return ( // 返回 JSX 元素
    <>
      <div
        style={rgbCss} // 設置 div 元素的樣式為 rgbCss
      >
        <h2 style={{color: "red"}}> // 設置 h2 元素的樣式，文字顏色為紅色
          目前色彩
        </h2>
        <div
          style={{
            width: "250px", // 設置寬度為 250px
            height: "100px", // 設置高度為 100px
            backgroundColor: `rgb(${r}, ${g}, ${b})`, // 設置背景顏色為當前 r、g、b 狀態值組成的 RGB 顏色
          }}
        />
        <span>R: </span> // 顯示紅色分量標籤
        <MySlider onChange={updateR} /> // 渲染 MySlider 元件，並將 onChange 屬性設置為 updateR 函數
        <span>G: </span> // 顯示綠色分量標籤
        <MySlider onChange={updateG} /> // 渲染 MySlider 元件，並將 onChange 屬性設置為 updateG 函數
        <span>B: </span> // 顯示藍色分量標籤
        <MySlider onChange={updateB} /> // 渲染 MySlider 元件，並將 onChange 屬性設置為 updateB 函數
      </div>
    </>
  );
}

export default MyRGBPanel; // 將 MyRGBPanel 元件作為預設匯出
