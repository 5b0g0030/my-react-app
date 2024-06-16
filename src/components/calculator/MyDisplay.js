import React from 'react'; // 從 'react' 庫中匯入 React

function MyDisplay(props){ // 定義一個名為 MyDisplay 的函數元件，接受 props 作為參數
    return <div className='display'>{props.result}</div> // 返回一個 div 元素，類名為 'display'，內容為 props.result 的值
}

export default MyDisplay; // 將 MyDisplay 元件作為預設匯出
