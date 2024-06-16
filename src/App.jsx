import './App.css'
import Navbar from './components/partials/Navbar'
import LandingPage from './components/LandingPage'
import elipse from './assets/Ellipse1.svg'


function App() {
  


  
  return (
    <>
    <img src={elipse} alt="" style={{position: "absolute", top: "120px"}}/>
    <div className='container p-0'>
    <Navbar />
    <LandingPage/>
    </div>
    </>
  )
}

export default App
