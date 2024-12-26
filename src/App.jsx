import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import Header from './components/Header'
import useFetch from "./useFetch"
import { useState } from "react"

function App() {
  const [type,setType]=useState("Both")
  const [searchTerm,setSearchTerm]=useState("")
  console.log(searchTerm)
const {data,loading,error}=useFetch("https://meetup-backend-coral.vercel.app/events")
console.log(data)

const filteredData=data?.filter(event=>{
    const matchesType =
type === "Both" || type === "" || event.type === type;

const matchesSearch =
searchTerm === "" ||
event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
event.tags?.some((tag) =>
  tag.toLowerCase().includes(searchTerm.toLowerCase())
);
return matchesType&& matchesSearch
})


const displayData=filteredData?.map(event=>(
  <div key={event._id} className="col-md-4 py-3" >
    <div className="card border border-0">
    <div className=" position-relative" id="card-img-top">
                <img
                    src={event.imgURL}
                    className="card-img"
                    
                    alt="Event Image"
               / >
                <div id="event-label">{event.type}</div>
            </div>
    <div className="card-body ">
                <p className="card-text text-muted mb-1">
                    {event.startDateAndTime}
                </p>
                <h5 className="card-title">{event.title}</h5>
            </div>
    </div>
  </div>
))
  return (
    <div id="bg-color">
     <Header setSearchTerm={setSearchTerm}/>
     <main className="container">
     <div className=" d-flex align-items-center justify-content-between">
      <h2>MeetUp Events</h2>
      <select onChange={event=>setType(event.target.value)} className="border border-0 text-muted">
        <option value="">Select Event Type</option>
        <option  value="Both">Both</option>
        <option  value="Online">Online</option>
        <option  value="Offline">Offline</option>
      </select>
     </div>
   {data ? (<div className="row py-5" >{displayData}</div>): loading && (<div><div className="d-flex align-items-center py-5">
  <strong>Loading...</strong>
  <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
<div className="row  ">
  <div className="col-md-4 py-3 ">
    <div className="card card-load" >
    <div className="m-5 p-5 ">

    </div>
    <div className="card-body py-3 bg-light"></div>
    </div>
  </div>
  <div className="col-md-4 py-3 ">
    <div className="card card-load">
    <div className="m-5 p-5"></div>
    <div className="card-body py-3 bg-light"></div>
    </div>
  </div>
  <div className="col-md-4 py-3 ">
    <div className="card card-load">
      <div className="m-5 p-5"></div>
      <div className="card-body py-3 bg-light"></div>
    </div>
  </div>
  <div className="col-md-4 py-3 ">
    <div className="card card-load">
    <div className="m-5 p-5"></div>
    <div className="card-body py-3 bg-light"></div>
    </div>
  </div>
  <div className="col-md-4 py-3 ">
    <div className="card card-load">
    <div className="m-5 p-5"></div>
    <div className="card-body py-3 bg-light"></div>
    </div>
  </div>
  <div className="col-md-4 py-3 ">
    <div className="card card-load">
    <div className="m-5 p-5"></div>
    <div className="card-body py-3 bg-light"></div>
    </div>
  </div>
</div>
</div>)}
   </main>
    </div>
  )
}

export default App
