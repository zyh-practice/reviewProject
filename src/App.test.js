/*
 * @Author: 赵彦辉 1344335822
 * @Date: 2025-11-25 22:34:12
 * @LastEditors: 赵彦辉 1344335822
 * @LastEditTime: 2025-11-25 23:36:50
 * @FilePath: \test\src\App.test.js
 * # ekek
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);P
  const linkElement = screen.getByText(/learn react/i);
// //
// *
// #
// @
// TODO
// 未完成
// ?
  expect(linkElement).toBeInTheDocument();
});
