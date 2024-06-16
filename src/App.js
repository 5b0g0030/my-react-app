import "./App.css"; // 引入全局的 CSS 樣式文件
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel"; // 引入 MyRGBPanel 組件
import MySlider from "./components/rgb-panel/MySlider"; // 引入 MySlider 組件
import MyCalculator from "./components/calculator/MyCalculator"; // 引入 MyCalculator 組件
import TicTacToe from "./components/tic-tac-toe/TicTacToe"; // 引入 TicTacToe 組件

function App() {
  return (
    <div className="App">  {/*定義根 div 元素，並設置其 CSS class 名稱為 App*/} 
      <h1>MySlider</h1> {/*顯示 MySlider 標題 */}
      <MySlider /> {/* 渲染 MySlider 組件 */}
      <h1>MyRGBPanel</h1> {/* 顯示 MyRGBPanel 標題 */}
      <MyRGBPanel /> {/* 渲染 MyRGBPanel 組件 */}
      <h1>MyCalculator</h1> {/* 顯示 MyCalculator 標題 */}
      <MyCalculator /> {/* 渲染 MyCalculator 組件 */}
      <h1>Tic-Tac-Toe Game</h1> {/* 顯示 Tic-Tac-Toe Game 標題 */}
      <TicTacToe /> {/* 渲染 TicTacToe 組件 */}
    </div>
  );
}

export default App; // 將 App 組件作為默認導出
