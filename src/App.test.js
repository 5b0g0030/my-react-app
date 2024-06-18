import { render, screen } from '@testing-library/react'; // 從 @testing-library/react 中引入 render 和 screen 方法
import App from './App'; // 引入要測試的 App 組件

// 定義一個名為 'renders learn react link' 的測試
test('renders learn react link', () => {
  render(<App />); // 渲染 App 組件
  const linkElement = screen.getByText(/learn react/i); // 從渲染結果中找到包含 'learn react' 的元素，忽略大小寫
  expect(linkElement).toBeInTheDocument(); // 斷言 linkElement 存在於文件中
});
