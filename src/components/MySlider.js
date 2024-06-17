// 從 'react' 模組中引入 useState 鉤子
import { useState } from "react";

// 定義一個名為 MySlider 的函數式元件，接收 onChange 作為屬性
function MySlider({ onChange }) {
  // 使用 useState 鉤子定義狀態變量 value，初始值為 128
  const [value, setValue] = useState(128);

  // 定義一個處理輸入變更的函數 handleChange，接收事件對象 e 作為參數
  const handleChange = (e) => {
    // 使用 setValue 更新 value 的值為當前目標元素的值
    setValue(e.target.value);
    // 如果 onChange 函數存在，則調用它並傳遞當前目標元素的值作為參數
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // 返回一個 JSX，這個 JSX 包含一個 div 元素，其中包括一個輸入元素和一個 span 元素
  return (
    <div>
      {/* 定義一個輸入元素，類型為範圍，寬度為200，最小值為0，最大值為255，值為當前的 value，並綁定 onChange 事件為 handleChange */}
      <input
        type="range"
        width="200"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
      {/* 顯示當前的 value 值 */}
      <span>{value}</span>
    </div>
  );
}

// 將 MySlider 元件作為預設導出
export default MySlider;
