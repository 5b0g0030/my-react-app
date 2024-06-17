import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
    // 使用 useState 定義三個狀態變數 r、g、b，初始值皆為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義三個更新狀態的函式 updateR、updateG、updateB
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義 CSS 样式對象 rgbCss
    const rgbCss = {
        border: "1px solid blue",  // 設置邊框為 1 像素藍色實線
        borderRadius: "20px",  // 設置邊框圓角為 20 像素
        width: "300px",  // 設置寬度為 300 像素
        display: "flex",  // 使用 flex 佈局
        flexDirection: "column",  // 主軸方向為列方向
        padding: "20px",  // 設置內邊距為 20 像素
        justifyContent: "center",  // 主軸對齊方式為居中
        alignItems: "center",  // 交叉軸對齊方式為居中
        margin: "auto",  // 外邊距自動，使元素水平居中
      };

  return (
    <>
      {/* 使用 div 元素包裹整個 RGB 面板，應用 rgbCss 样式 */}
      <div
        style={rgbCss}
      >
        {/* 顯示 "目前色彩" 標題，文字顏色為紅色 */}
        <h2 style={{color: "red"}}>
          目前色彩
        </h2>
        {/* 顯示一個矩形區域，用於展示當前的 RGB 顏色 */}
        <div
          style={{
            width: "250px",  // 設置寬度為 250 像素
            height: "100px",  // 設置高度為 100 像素
            backgroundColor: `rgb(${r}, ${g}, ${b})`,  // 根據 r、g、b 的值設置背景顏色
          }}
        />
        {/* 顯示 "R:" 文字標籤 */}
        <span>R: </span>
        {/* 引入 MySlider 組件，並將 updateR 函式傳遞為 onChange 屬性 */}
        <MySlider onChange={updateR} />
        {/* 顯示 "G:" 文字標籤 */}
        <span>G: </span>
        {/* 引入 MySlider 組件，並將 updateG 函式傳遞為 onChange 屬性 */}
        <MySlider onChange={updateG} />
        {/* 顯示 "B:" 文字標籤 */}
        <span>B: </span>
        {/* 引入 MySlider 組件，並將 updateB 函式傳遞為 onChange 屬性 */}
        <MySlider onChange={updateB} />
      </div>
    </>
  );
}

// 導出 MyRGBPanel 組件
export default MyRGBPanel;
