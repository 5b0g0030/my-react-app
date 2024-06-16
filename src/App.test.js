// 從 '@testing-library/react' 模組中引入 render 和 screen 函數
import { render, screen } from '@testing-library/react';

// 從當前目錄中的 App 組件引入 App
import App from './App';

// 定義一個測試用例，描述為 'renders learn react link'
test('renders learn react link', () => {
  // 使用 render 函數將 App 組件渲染到虛擬 DOM 中
  render(<App />);

  // 使用 screen.getByText 函數根據文本內容查找 DOM 節點，文本內容是正則表達式 /learn react/i（不區分大小寫）
  const linkElement = screen.getByText(/learn react/i);

  // 使用 expect 函數斷言 linkElement 是否存在於文檔中
  expect(linkElement).toBeInTheDocument();
});

