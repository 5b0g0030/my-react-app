import { useState } from "react";

// 定義 MySlider 函數組件，接收 onChange 作為屬性
function MySlider({onChange}) {
  // 使用 useState 定義狀態變數 value，初始值為 128
  const [value, setValue] = useState(128);

  // 定義 handleChange 函式，處理滑動輸入的變化
  const handleChange = (e) => {
    setValue(e.target.value);  // 設置 value 為滑動條的當前值
    if (onChange){
      onChange(e.target.value);  // 如果傳入了 onChange 函式，則將當前值傳遞給它
    }
  };

  // 返回一個包含輸入範圍和當前值顯示的 div 元素
  return (
    <div>
      {/* 輸入範圍元素，類型為 range，最小值為 0，最大值為 255，值為當前 value */}
      <input
        type="range"
        width="200"  // 寬度屬性，此處似乎是多餘的，不會影響實際渲染
        min="0"  // 最小值為 0
        max="255"  // 最大值為 255
        value={value}  // 當前值為 state 中的 value
        onChange={handleChange}  // 變化時調用 handleChange 函式
      />
      {/* 顯示當前 value 的 span 元素 */}
      <span>{value}</span>
    </div>
  );
}

// 導出 MySlider 組件
export default MySlider;
