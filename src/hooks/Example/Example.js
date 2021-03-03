import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  // 在每次渲染之后会重新生成，替换之前的。
  // effect 更像是渲染结果的一部分，每个 effect “属于”一次特定的渲染。
  // effect 不会阻塞浏览器更新屏幕，大多数情况下，effect 不需要同步地执行。
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>change: {count}</button>
    </div>
  )
}

export { Example }
