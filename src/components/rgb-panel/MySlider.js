import { useState } from "react"; // 從 'react' 庫中匯入 useState Hook

function MySlider({onChange}) { // 定義一個名為 MySlider 的函數元件，接受 onChange 作為屬性
  const [value, setValue] = useState(128); // 使用 useState Hook 定義狀態 value，初始值為 128，並定義其設定函數 setValue
  const handleChange = (e) => { // 定義一個函數 handleChange，接受事件對象 e 作為參數
    setValue(e.target.value); // 更新狀態 value 為滑動條的當前值
    if (onChange){ // 如果有傳入 onChange 屬性
      onChange(e.target.value); // 調用 onChange 函數並傳遞滑動條的當前值
    }
  };
  return ( // 返回 JSX 元素
    <div>
      <input
        type="range" // 設置輸入類型為滑動條
        width = "200" // 設置滑動條寬度為 200
        min="0" // 設置滑動條的最小值為 0
        max="255" // 設置滑動條的最大值為 255
        value={value} // 設置滑動條的當前值為狀態 value
        onChange={handleChange} // 設置滑動條值變更時觸發 handleChange 函數
      />
      <span>{value}</span> // 顯示滑動條的當前值
    </div>
  );
}

export default MySlider; // 將 MySlider 元件作為預設匯出
