// 從 'react' 模組中引入 React
import React from 'react';

// 引入本地的 CSS 樣式表 'MyCalculator.css'
import './MyCalculator.css';

// 定義一個名為 MyButton 的函數式元件，接收 props 作為參數
function MyButton(props) {
    // 返回一個 JSX，這個 JSX 包含一個 class 名稱為 'board' 的 div 元素，內容為 "計算機按鈕面板"
    return (
        <div className='board'>計算機按鈕面板</div>
    );
}

// 將 MyButton 元件作為預設導出
export default MyButton;
