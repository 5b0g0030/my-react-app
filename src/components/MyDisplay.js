// 引入 React 模組
import React from 'react';

// 定義名為 MyDisplay 的函數式組件，接收 props 作為參數
function MyDisplay(props){
    // 返回一個 div 元素，顯示 props 中的 result
    return <div className='display'>{props.result}</div>
}

// 將 MyDisplay 組件作為預設導出
export default MyDisplay;
