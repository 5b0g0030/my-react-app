// 從 'react' 模組中引入 React
import React from "react";

// 引入本地的 CSS 樣式表 'MyCalculator.css'
import "./MyCalculator.css";

// 定義一個名為 MyButton 的函數式元件，接收 props 作為屬性
function MyButton(props) {
    // 定義一個函數 handelClick，接收事件對象 e 作為參數
    const handelClick = (e) => {
        // 調用 props 中的 buttonClicked 函數，並傳遞當前目標元素的值作為參數
        props.buttonClicked(e.target.value);
        // 顯示一個警告框，內容為當前目標元素的值（此行已註釋掉）
        // alert(e.target.value);
    }

    // 返回一個 JSX，這個 JSX 包含多個按鈕的 div 元素
    return (
        <div className="board">
            <div>
                {/* 定義一個按鈕，類名為 btn btn-action，值為 'c'，綁定 onClick 事件為 handelClick，顯示文本為 'C' */}
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
                {/* 定義一個按鈕，類名為 btn btn-action，值為 '+/-'，綁定 onClick 事件為 handelClick，顯示文本為 '+/-' */}
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
                {/* 定義一個按鈕，類名為 btn btn-action，值為 '%'，綁定 onClick 事件為 handelClick，顯示文本為 '%' */}
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
                {/* 定義一個按鈕，類名為 btn btn-operator，值為 '/'，綁定 onClick 事件為 handelClick，顯示文本為 '/' */}
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
            </div>
            <div>
                {/* 定義一個按鈕，類名為 btn，值為 '7'，綁定 onClick 事件為 handelClick，顯示文本為 '7' */}
                <button className="btn" value="7" onClick={handelClick}>7</button>
                {/* 定義一個按鈕，類名為 btn，值為 '8'，綁定 onClick 事件為 handelClick，顯示文本為 '8' */}
                <button className="btn" value="8" onClick={handelClick}>8</button>
                {/* 定義一個按鈕，類名為 btn，值為 '9'，綁定 onClick 事件為 handelClick，顯示文本為 '9' */}
                <button className="btn" value="9" onClick={handelClick}>9</button>
                {/* 定義一個按鈕，類名為 btn btn-operator，值為 '*'，綁定 onClick 事件為 handelClick，顯示文本為 '*' */}
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
            </div>
            <div>
                {/* 定義一個按鈕，類名為 btn，值為 '4'，綁定 onClick 事件為 handelClick，顯示文本為 '4' */}
                <button className="btn" value="4" onClick={handelClick}>4</button>
                {/* 定義一個按鈕，類名為 btn，值為 '5'，綁定 onClick 事件為 handelClick，顯示文本為 '5' */}
                <button className="btn" value="5" onClick={handelClick}>5</button>
                {/* 定義一個按鈕，類名為 btn，值為 '6'，綁定 onClick 事件為 handelClick，顯示文本為 '6' */}
                <button className="btn" value="6" onClick={handelClick}>6</button>
                {/* 定義一個按鈕，類名為 btn btn-operator，值為 '-'，綁定 onClick 事件為 handelClick，顯示文本為 '-' */}
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
            </div>
            <div>
                {/* 定義一個按鈕，類名為 btn，值為 '1'，綁定 onClick 事件為 handelClick，顯示文本為 '1' */}
                <button className="btn" value="1" onClick={handelClick}>1</button>
                {/* 定義一個按鈕，類名為 btn，值為 '2'，綁定 onClick 事件為 handelClick，顯示文本為 '2' */}
                <button className="btn" value="2" onClick={handelClick}>2</button>
                {/* 定義一個按鈕，類名為 btn，值為 '3'，綁定 onClick 事件為 handelClick，顯示文本為 '3' */}
                <button className="btn" value="3" onClick={handelClick}>3</button>
                {/* 定義一個按鈕，類名為 btn btn-operator，值為 '+'，綁定 onClick 事件為 handelClick，顯示文本為 '+' */}
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
            </div>
            <div>
                {/* 定義一個按鈕，類名為 btn btn-0，值為 '0'，綁定 onClick 事件為 handelClick，顯示文本為 '0' */}
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
                {/* 定義一個按鈕，類名為 btn，值為 '.'，綁定 onClick 事件為 handelClick，顯示文本為 '.' */}
                <button className="btn" value="." onClick={handelClick}>.</button>
                {/* 定義一個按鈕，類名為 btn btn-operator，值為 '='，綁定 onClick 事件為 handelClick，顯示文本為 '=' */}
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
            </div>
        </div>
    );
}

// 將 MyButton 元件作為預設導出
export default MyButton;
