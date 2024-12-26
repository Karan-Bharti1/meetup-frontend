import { NavLink } from "react-router-dom"

const Header=({setSearchTerm})=>{
return(
    <header>
        <div className="container">
        <div className=" d-flex align-items-center justify-content-between">
            <NavLink id="meetupHeading" className={"fst-italic"} to="/">meetup</NavLink>
            <div> <div className="input-group border">
  <span className="px-3 bg-white" id="basic-addon1">⌕</span>
  <input type="text" onChange={(event)=>setSearchTerm(event.target.value)} className="border border-0"  placeholder="Search events and tags..." aria-label="Username" aria-describedby="basic-addon1"/>
</div></div>
           
        </div>
        <hr/></div>
     
    </header>
)
}
export default Header