import {  useEffect, useRef, useState } from 'react';
import './index.css';

function Life() {
  const [life, setLife ] = useState(true);
  const [opacity, setOpacity ] = useState(1);
  const innter=useRef(null)
  useEffect(()=>{
    innter.current=setInterval(() => {
        console.log('1====>', 1);
        console.log('opacity====>', opacity);
        opacity>0?setOpacity(opacity-0.1):setOpacity(1)
        
     }, 200);
    return ()=>{clearInterval(innter.current)}
})
 
 
  function death() {
    console.log('div被点击了');
    setLife(!life);
    
    
  }
  return (
    <div>
      {life?<h1 style={{opacity:opacity}} className="header">学不会怎么办</h1>:''}
      <button onClick={death}>不活了</button>
    </div>
  );
}

export default Life;
