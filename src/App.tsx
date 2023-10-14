// eslint-disable-next-line @typescript-eslint/no-var-requires
const twoViews = require('./electron-starter')

function App() {

  return (
    <button onClick={() => twoViews('https://twitter.com/')}>load twiiter</button>
  )
}

export default App
