import './Mycompents.css';
// 创建函数式组件，函数首字母大写
function clickDiv(){
  console.log('div被点击了');
}
function Mycompents() {
  console.log('我是myconpents');
  let a={
    b: 12,
  }
  // 语法糖解构赋值
  const {b}=a;
console.log('b====>', b);
  return (
    <div onClick={clickDiv}>
      <h1 className="header">我是一个component</h1>
    </div>
  );
}

console.log('Mycompents====>', Mycompents);
export default Mycompents;
