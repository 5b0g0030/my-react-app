import { useState } from "react"; // 從 react 中導入 useState 鉤子

function MySlider({ onChange }) { // 定義 MySlider 組件，接受 onChange 屬性
  const [value, setValue] = useState(128); // 使用 useState 鉤子初始化 value 狀態為 128

  const handleChange = (e) => { // 定義 handleChange 函數，處理輸入變化
    setValue(e.target.value); // 更新 value 狀態為輸入的值
    if (onChange) { // 如果 onChange 函數存在
      onChange(e.target.value); // 調用 onChange 函數並傳遞輸入的值
    }
  };

  return (
    <div> {/* 返回 JSX 元素 */}
      <input
        type="range" // 輸入類型為 range
        width="200" // 寬度屬性設置為 200（此屬性在 input 元素中無效）
        min="0" // 最小值為 0
        max="255" // 最大值為 255
        value={value} // 當前值設置為 value 狀態
        onChange={handleChange} // 輸入變化時調用 handleChange 函數
      />
      <span>{value}</span> {/* 顯示當前值 */}
    </div>
  );
}

export default MySlider; // 將 MySlider 組件作為默認導出
