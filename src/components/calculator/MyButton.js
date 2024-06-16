import React from "react"; // 從 React 庫中導入 React
import "./MyCalculator.css"; // 導入 MyCalculator 的 CSS 文件

function MyButton(props) {
    // 定義 handelClick 函數，處理按鈕點擊事件
    const handelClick = (e) => {
        props.buttonClicked(e.target.value); // 調用從父組件傳遞過來的 buttonClicked 函數，並傳遞按鈕的值
        // alert(e.target.value); // 彈出按鈕值的警告框（已註釋）
    }

    // 返回按鈕組件的 JSX 結構
    return (
        <div className="board"> {/* 外層容器，使用 CSS 類名 "board" */}
            <div>
                {/* 操作按鈕行 */}
                <button className="btn btn-action" value="c" onClick={handelClick}>C</button>
                <button className="btn btn-action" value="+/-" onClick={handelClick}>+/-</button>
                <button className="btn btn-action" value="%" onClick={handelClick}>%</button>
                <button className="btn btn-operator" value="/" onClick={handelClick}>/</button>
            </div>
            <div>
                {/* 第一行數字按鈕和運算符號 */}
                <button className="btn" value="7" onClick={handelClick}>7</button>
                <button className="btn" value="8" onClick={handelClick}>8</button>
                <button className="btn" value="9" onClick={handelClick}>9</button>
                <button className="btn btn-operator" value="*" onClick={handelClick}>*</button>
            </div>
            <div>
                {/* 第二行數字按鈕和運算符號 */}
                <button className="btn" value="4" onClick={handelClick}>4</button>
                <button className="btn" value="5" onClick={handelClick}>5</button>
                <button className="btn" value="6" onClick={handelClick}>6</button>
                <button className="btn btn-operator" value="-" onClick={handelClick}>-</button>
            </div>
            <div>
                {/* 第三行數字按鈕和運算符號 */}
                <button className="btn" value="1" onClick={handelClick}>1</button>
                <button className="btn" value="2" onClick={handelClick}>2</button>
                <button className="btn" value="3" onClick={handelClick}>3</button>
                <button className="btn btn-operator" value="+" onClick={handelClick}>+</button>
            </div>
            <div>
                {/* 第四行數字按鈕和運算符號 */}
                <button className="btn btn-0" value="0" onClick={handelClick}>0</button>
                <button className="btn" value="." onClick={handelClick}>.</button>
                <button className="btn btn-operator" value="=" onClick={handelClick}>=</button>
            </div>
        </div>
    );
}

export default MyButton; // 將 MyButton 組件作為默認導出
