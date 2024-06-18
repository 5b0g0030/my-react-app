import logo from "./logo.svg"; // 引入 logo 圖片
import "./App.css"; // 引入樣式表 App.css
import MySlider from "./MySlider"; // 引入 MySlider 組件

// 定義 App 組件
function App() {
  // 返回 App 組件的 JSX 結構
  return (
    <div className="App">
      <h1>Javascript程式設計，使用react</h1> {/* 標題，內容為 'Javascript程式設計，使用react' */}
      <h2>第一個元件</h2> {/* 二級標題，內容為 '第一個元件' */}
      <span>R: </span><MySlider /> {/* 顯示 'R: ' 並渲染 MySlider 組件 */}
      <span>G: </span><MySlider /> {/* 顯示 'G: ' 並渲染 MySlider 組件 */}
      <span>B: </span><MySlider /> {/* 顯示 'B: ' 並渲染 MySlider 組件 */}
      
      {/* 以下為註釋掉的代碼 */}
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* 顯示圖片，來源為 logo，class 名為 App-logo，alt 屬性為 'logo' */}
      {/* <h1>Hello React! 2024.5.1</h1> */}
      {/* 顯示標題，內容為 'Hello React! 2024.5.1' */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* 顯示一個連結，class 名為 App-link，指向 https://reactjs.org，開新窗口，且防止安全漏洞 */}
      {/* </header> */}
    </div>
  );
}

// 將 App 組件導出，以便其他模組引入和使用
export default App;
