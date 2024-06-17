import React, { useState } from "react"; // 從 React 模組中引入 React 和 useState
import MySlider from "./MySlider"; // 引入 MySlider 組件

// 定義 MyRGBPanel 組件
function MyRGBPanel() {
    // 使用 useState 定義 r, g, b 狀態，初始值為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 r, g, b 狀態的函數
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義用於設置樣式的 CSS 對象
    const rgbCss = {
        border: "1px solid blue", // 藍色邊框
        borderRadius: "20px", // 圓角半徑為 20px
        width: "300px", // 寬度為 300px
        display: "flex", // 使用 flex 佈局
        flexDirection: "column", // 垂直排列
        padding: "20px", // 內邊距為 20px
        justifyContent: "center", // 垂直居中對齊
        alignItems: "center", // 水平居中對齊
        margin: "auto", // 自動外邊距
    };

    // 返回 MyRGBPanel 組件的 JSX 結構
    return (
        <>
            <div style={rgbCss}>
                <h2 style={{ color: "red" }}>目前色彩</h2>
                <div
                    style={{
                        width: "250px",
                        height: "100px",
                        backgroundColor: `rgb(${r}, ${g}, ${b})`, // 背景色根據 r, g, b 動態變化
                    }}
                />
                <span>R: </span>
                {/* 渲染 MySlider 組件，傳遞 updateR 函數作為 onChange 屬性 */}
                <MySlider onChange={updateR} />
                <span>G: </span>
                {/* 渲染 MySlider 組件，傳遞 updateG 函數作為 onChange 屬性 */}
                <MySlider onChange={updateG} />
                <span>B: </span>
                {/* 渲染 MySlider 組件，傳遞 updateB 函數作為 onChange 屬性 */}
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

// 將 MyRGBPanel 組件導出，以便其他模組引入和使用
export default MyRGBPanel;
