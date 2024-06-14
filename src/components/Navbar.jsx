import React, { createContext, useContext, useEffect, useState } from 'react'
import { NewsContext } from '../hooks/NewsContext'


const Navbar = () => {

  const res = useContext(NewsContext);
  const[searchQuery,setSearchQuery] = useState("");

  
  // useEffect(()=>{
  //   console.log(res);
  // },[res])

  const handleDropDown = (e)=>{
    res.setNews(e.target.getAttribute("value"));
    
  }

  const handleInputChange = (e)=>{
    const content = e.target.value;
    setSearchQuery(content);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    res.setSearchContent(searchQuery);
  }

  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">AD News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select country
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" value="us" onClick={(e)=>handleDropDown(e)} >USA</a></li>
            <li><a className="dropdown-item" value="gb" onClick={(e)=>handleDropDown(e)}>ENGLAND</a></li>
            <li><a className="dropdown-item" value="in" onClick={(e)=>handleDropDown(e)}>INDIA</a></li>
            
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" onSubmit={(e)=>handleSubmit(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handleInputChange(e)}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar