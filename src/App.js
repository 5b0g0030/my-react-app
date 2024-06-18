import "./App.css"; // 引入樣式表 App.css
import MyRGBPanel from "./components/MyRGBPanel"; // 引入 MyRGBPanel 組件
import MySlider from "./components/MySlider"; // 引入 MySlider 組件

// 定義 App 組件
function App() {
  // 返回 App 組件的 JSX 結構
  return (
    <div className="App">
      <h1>MySlider</h1> {/* 顯示標題 MySlider */}
      <MySlider /> {/* 渲染 MySlider 組件 */}
      <h1>MyRGBPanel</h1> {/* 顯示標題 MyRGBPanel */}
      <MyRGBPanel /> {/* 渲染 MyRGBPanel 組件 */}
    </div>
  );
}

// 將 App 組件導出，以便其他模組引入和使用
export default App;

