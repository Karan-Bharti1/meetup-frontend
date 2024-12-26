import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const Description=()=>{
    const {eventId}=useParams()
    console.log(eventId)
  const {data,loading,error}=useFetch('https://meetup-backend-coral.vercel.app/events')
  const findData=data?.find(event=>event._id===eventId)
  console.log(findData)
  const DisplayData=()=>(
    <div className="row">
<div className="col-md-7">
    <h1>{findData.title}</h1>
    <br/>
    <p><strong className="text-muted mt-3">Hosted By: </strong></p>
    <p>{findData.hostedBy}</p>
    <img id="descriptionImage" src={findData.imgURL}/>
    <h2 className="pt-3">Details:</h2>
    <p className="py-3 descData">{findData.eventDes}</p>
    <h2>Additional Details: </h2>
    <p><strong>Dress Code: </strong><span className="text-muted">{findData.dressCode}</span></p>
    <p><strong>Age Restrictions: </strong><span className="text-muted">{findData.ageRestrictions}</span></p>
    <h2>Event Tags: </h2>
    <div className="row py-3">
        {findData.tags.map((tag,index)=>
  (
    <div key={index} className="col-2 mx-3">
   <a className="btn btn-danger" id="tag">{tag}</a>
    </div>
       ))}
     
    </div>
</div>
<div className="col-md-5 text-muted ">
    <div className="card bg-white">
<div className="d-flex align-items-center justify-content-center py-4">
    <div className="me-2">⏱️</div>
    <div>
        <div className="text-muted">{findData.startDateAndTime} to</div>
        <div className="text-muted">{findData.endDateAndTime}</div>
    </div>
</div>
<div className="d-flex align-items-center justify-content-center py-4">
    <div className="me-2">📌</div>
    <div>
        <div className="text-muted">{findData.address}</div>
       
    </div>
</div>
<p className="d-flex align-items-center justify-content-center py-4">
₹ {findData.entryPrice}/-
</p>
</div>
<h2 className="pt-3 ">
 Speakers:({findData.speakers.length})
</h2>
<div className="row ">
{
    findData.speakers.map(speaker=>(
       <div key={speaker._id} className="col-md-4 ">

     <div className="card text-center p-2">
        <img src={speaker.profileURL} className=" speakerImage img-fluid p-2 rounded-circle" alt="Circular Thumbnail"/>
        <p>{speaker.name}</p>
        <p>{speaker.designation}</p>
</div>
 


       </div>
            ))
}

</div>

</div>
    </div>
  )
return(
    <><Header/>
    <main className="container">
    {data?(<DisplayData/>):loading &&(<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>)}
</main>
    </>
)
}
export default Description;