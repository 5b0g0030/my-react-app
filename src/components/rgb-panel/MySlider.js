import { useState } from "react"; // 從 React 中引入 useState Hook

function MySlider() { // 定義 MySlider 組件
  const [value, setValue] = useState(128); // 定義狀態變量 value，初始值為 128，並且 setValue 用於更新 value
  const handleChange = (e) => { // 定義 handleChange 函數來處理輸入變化事件
    setValue(e.target.value); // 更新 value 為滑動條的當前值
  };
  return (
    <div> {/* 包裹輸入元素和顯示數值的 div */}
      <input
        type="range" // 設置輸入類型為範圍滑動條
        width="200" // 設置滑動條的寬度為 200
        min="0" // 設置滑動條的最小值為 0
        max="255" // 設置滑動條的最大值為 255
        value={value} // 設置滑動條的當前值為狀態變量 value
        onChange={handleChange} // 當滑動條的值變化時，調用 handleChange 函數
      />
      <span>{value}</span> {/* 顯示當前滑動條的值 */}
    </div>
  );
}

export default MySlider; // 將 MySlider 組件作為默認導出