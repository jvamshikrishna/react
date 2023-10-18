import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)
const anotherUser = "chai aur react"
const reactElement2 = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherElement

)

ReactDOM.createRoot(document.getElementById('root')).render(
// reactElement // not working
//anotherElement // working
reactElement2 // working
//<App/>
)
