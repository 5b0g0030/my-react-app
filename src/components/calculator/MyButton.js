import React from "react"; // 從 React 模組中引入 React
import "./MyCalculator.css"; // 引入 MyCalculator.css 樣式表

// 定義 MyButton 組件，接收 props 作為參數
function MyButton(props) {
    // 定義 handelClick 函數，當按鈕被點擊時觸發
    const handelClick = (e) =>{
        // 調用父組件傳遞的 buttonClicked 函數，並傳入被點擊按鈕的值
        props.buttonClicked(e.target.value);
        // 可選：顯示被點擊按鈕的值
        // alert(e.target.value);
    }

    // 返回按鈕組件的 JSX 結構
    return (
        // 外層 div，className 設置為 "board"
        <div className="board">
            <div>
                {/* 定義四個操作按鈕，設置 className, value 和 onClick 屬性 */}
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
            </div>
            <div>
                {/* 定義數字和操作按鈕，設置 className, value 和 onClick 屬性 */}
                <button className="btn" value="7" onClick={handelClick}>7</button>
                <button className="btn" value="8" onClick={handelClick}>8</button>
                <button className="btn" value="9" onClick={handelClick}>9</button>
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
            </div>
            <div>
                <button className="btn" value="4" onClick={handelClick}>4</button>
                <button className="btn" value="5" onClick={handelClick}>5</button>
                <button className="btn" value="6" onClick={handelClick}>6</button>
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
            </div>
            <div>
                <button className="btn" value="1" onClick={handelClick}>1</button>
                <button className="btn" value="2" onClick={handelClick}>2</button>
                <button className="btn" value="3" onClick={handelClick}>3</button>
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
            </div>
            <div>
                {/* 定義零按鈕，設置 className 為 "btn btn-0" */}
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
                <button className="btn" value="." onClick={handelClick}>.</button>
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
            </div>
        </div>
    );
}

// 將 MyButton 組件導出，讓其他模組可以引入和使用
export default MyButton;
