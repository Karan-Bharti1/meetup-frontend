import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import Header from './components/Header'
import useFetch from "./useFetch"

function App() {
const {data,loading,error}=useFetch("https://meetup-backend-coral.vercel.app/events")
console.log(data)

  return (
    <div id="bg-color">
     <Header/>
    </div>
  )
}

export default App
