import './App.css'
import Message from './components/Message'
// components are written in capital letter
function App() {
  // create variables inside a component
  const msg = 'Hello from React JS'
  const a = 2
  const b = 4
  return (
    // react uses jsx to simplify coding by writing similarly html into javascript
    <div className="App"> 
      {msg + ' jsx evaluation'} 
      <br />
      {a + b}
      <br />
      <Message msg='initial message'/>
      <Message msg='middle message'/>
      <Message msg='final message'/>
    </div>
  )
}

export default App
