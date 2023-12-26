// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {
  const cardElements = data.map((item, index) => {
    return (
      <div>
        {index!=0 && <hr />}
        <Card key = {item.id} item = {item}/>
      </div>
    )
  })

  return (
    <div className='app-container'>
      <Navbar />
      <div className='main-container'>
        {cardElements}
      </div>
    </div>
  )
}

export default App
