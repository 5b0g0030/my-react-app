// 從 'react' 模組中引入 React
import React from "react";

// 從 'react' 模組中引入 useState 鉤子
import { useState } from "react";

// 引入本地的 MySlider 組件
import MySlider from "./MySlider";

// 定義一個名為 MyRGBPanel 的函數式元件
function MyRGBPanel() {
    // 使用 useState 鉤子定義狀態變量 r，初始值為 128
    const [r, setR] = useState(128);
    // 使用 useState 鉤子定義狀態變量 g，初始值為 128
    const [g, setG] = useState(128);
    // 使用 useState 鉤子定義狀態變量 b，初始值為 128
    const [b, setB] = useState(128);

    // 定義一個函數 updateR，接收一個參數 v，並更新 r 的值
    const updateR = (v) => setR(v);
    // 定義一個函數 updateG，接收一個參數 v，並更新 g 的值
    const updateG = (v) => setG(v);
    // 定義一個函數 updateB，接收一個參數 v，並更新 b 的值
    const updateB = (v) => setB(v);

    // 定義一個物件 rgbCss，包含一些 CSS 樣式
    const rgbCss = {
        border: "1px solid blue", // 設置邊框為藍色，寬度為1像素
        borderRadius: "20px", // 設置邊框圓角為20像素
        width: "300px", // 設置寬度為300像素
        display: "flex", // 設置為彈性盒子布局
        flexDirection: "column", // 設置彈性盒子的方向為縱向
        padding: "20px", // 設置內邊距為20像素
        justifyContent: "center", // 設置主軸方向上的對齊方式為居中
        alignItems: "center", // 設置交叉軸方向上的對齊方式為居中
        margin: "auto", // 設置自動外邊距，使元素水平居中
    };

    // 返回一個 JSX，這個 JSX 包含一個包含多個子元素的 div
    return (
        <>
            {/* 定義一個樣式為 rgbCss 的 div 元素 */}
            <div style={rgbCss}>
                {/* 顯示標題 '目前色彩' */}
                <h2 style={{ color: "red" }}>目前色彩</h2>
                {/* 定義一個 div 元素，顯示目前的 RGB 顏色 */}
                <div
                    style={{
                        width: "250px", // 設置寬度為250像素
                        height: "100px", // 設置高度為100像素
                        backgroundColor: `rgb(${r}, ${g}, ${b})`, // 設置背景顏色為當前的 RGB 值
                    }}
                />
                {/* 顯示 'R: ' 字樣 */}
                <span>R: </span>
                {/* 渲染 MySlider 組件，並將 updateR 函數作為 onChange 屬性傳遞給它 */}
                <MySlider onChange={updateR} />
                {/* 顯示 'G: ' 字樣 */}
                <span>G: </span>
                {/* 渲染 MySlider 組件，並將 updateG 函數作為 onChange 屬性傳遞給它 */}
                <MySlider onChange={updateG} />
                {/* 顯示 'B: ' 字樣 */}
                <span>B: </span>
                {/* 渲染 MySlider 組件，並將 updateB 函數作為 onChange 屬性傳遞給它 */}
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

// 將 MyRGBPanel 元件作為預設導出
export default MyRGBPanel;
