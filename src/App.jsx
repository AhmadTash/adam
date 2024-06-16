import './App.css'
import Navbar from './components/partials/Navbar'
import LandingPage from './components/LandingPage'
import elipse from './assets/Ellipse1.svg'
import useFetch from './hooks/useFetch'

function App() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/cars')


  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error: {error.message}</h1>
  }
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
