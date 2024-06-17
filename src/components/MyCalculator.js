// 從 'react' 模組中引入 React 和 useState 鉤子
import React, { useState } from 'react';

// 引入本地的 MyDisplay 組件
import MyDisplay from './MyDisplay';

// 引入本地的 MyButton 組件
import MyButton from './MyButton';

// 引入本地的 CSS 樣式表 'MyCalculator.css'
import './MyCalculator.css';

// 定義一個名為 MyCalculator 的函數式元件
function MyCalculator() {
    // 返回一個 JSX，這個 JSX 包含一個 class 名稱為 'calculator' 的 div 元素
    return (
        <div className='calculator'>
            {/* 渲染 MyDisplay 組件 */}
            <MyDisplay />
            {/* 渲染 MyButton 組件 */}
            <MyButton />
        </div>
    );
}

// 將 MyCalculator 元件作為預設導出
export default MyCalculator;
