import { useState } from "react"; // 從 React 模組中引入 useState 鉤子

// 定義 MySlider 組件，接收 onChange 函數作為參數
function MySlider({ onChange }) {
  // 使用 useState 定義 value 狀態，初始值為 128
  const [value, setValue] = useState(128);

  // 定義 handleChange 函數，用於處理滑動條變化事件
  const handleChange = (e) => {
    setValue(e.target.value); // 更新 value 狀態為滑動條的值
    // 如果存在 onChange 函數，則調用該函數並傳入滑動條的值
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // 返回滑動條組件的 JSX 結構
  return (
    <div>
      <input
        type="range"
        width="200" // 這裡 width 屬性沒有效果，可移除
        min="0"
        max="255"
        value={value}
        onChange={handleChange} // 滑動條變化時調用 handleChange 函數
      />
      <span>{value}</span> {/* 顯示當前滑動條的值 */}
    </div>
  );
}

// 將 MySlider 組件導出，以便其他模組引入和使用
export default MySlider;

