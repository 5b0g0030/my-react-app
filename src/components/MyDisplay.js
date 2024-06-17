// 從 'react' 模組中引入 React
import React from 'react';

// 定義一個名為 MyDisplay 的函數式元件
function MyDisplay() {
    // 返回一個 JSX，這個 JSX 包含一個 class 名稱為 'display' 的 div 元素，內容為 "計算結果"
    return <div className='display'>計算結果</div>;
}

// 將 MyDisplay 元件作為預設導出
export default MyDisplay;
