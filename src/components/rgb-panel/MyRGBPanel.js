import React from "react"; // 從 react 庫中導入 React
import { useState } from "react"; // 從 react 庫中導入 useState 鉤子
import MySlider from "./MySlider"; // 導入自定義的 MySlider 組件

function MyRGBPanel() {
  const [r, setR] = useState(128); // 使用 useState 鉤子初始化紅色值為 128
  const [g, setG] = useState(128); // 使用 useState 鉤子初始化綠色值為 128
  const [b, setB] = useState(128); // 使用 useState 鉤子初始化藍色值為 128

  const updateR = (v) => setR(v); // 更新紅色值的函數
  const updateG = (v) => setG(v); // 更新綠色值的函數
  const updateB = (v) => setB(v); // 更新藍色值的函數

  const rgbCss = { // 定義 RGB 面板的 CSS 樣式
    border: "1px solid blue", // 藍色邊框
    borderRadius: "20px", // 邊框圓角
    width: "300px", // 寬度為 300px
    display: "flex", // 使用 flex 布局
    flexDirection: "column", // 元素垂直排列
    padding: "20px", // 內邊距為 20px
    justifyContent: "center", // 垂直方向居中
    alignItems: "center", // 水平方向居中
    margin: "auto", // 自動調整外邊距以居中對齊
  };

  return (
    <>
      <div style={rgbCss}> {/* 應用定義的 CSS 樣式 */}
        <h2 style={{ color: "red" }}> {/* 標題顏色設置為紅色 */}
          目前色彩
        </h2>
        <div
          style={{
            width: "250px", // 宽度 250px
            height: "100px", // 高度 100px
            backgroundColor: `rgb(${r}, ${g}, ${b})`, // 背景顏色設置為當前的 RGB 值
          }}
        />
        <span>R: </span> {/* 顯示紅色標籤 */}
        <MySlider onChange={updateR} /> {/* 渲染 MySlider 組件，並傳遞更新紅色值的函數 */}
        <span>G: </span> {/* 顯示綠色標籤 */}
        <MySlider onChange={updateG} /> {/* 渲染 MySlider 組件，並傳遞更新綠色值的函數 */}
        <span>B: </span> {/* 顯示藍色標籤 */}
        <MySlider onChange={updateB} /> {/* 渲染 MySlider 組件，並傳遞更新藍色值的函數 */}
      </div>
    </>
  );
}

export default MyRGBPanel; // 將 MyRGBPanel 組件作為默認導出