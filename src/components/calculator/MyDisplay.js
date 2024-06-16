import React from 'react'; // 從 React 庫中導入 React

function MyDisplay(props) {
    return <div className='display'>{props.result}</div>; // 使用 props 顯示計算結果
}

export default MyDisplay; // 將 MyDisplay 組件作為默認導出
