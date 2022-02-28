
import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import "./movie.css"

function Movies() {
   
  const[content,setcontent]=useState([])
   const getApi= async()=>{
    
    try{
      const response= await fetch("Api Url")
      setcontent(await response.json());
    //  console.log(response);
    //  const data= await response.json();
    //  console.log(data);
    }
    catch (error) {
      console.log("my error is "+ error);
    }
   }

    useEffect( ()=>{
      getApi()
    },[content])

  return (
    <div className='row text-center'>
      {
        content.map((c)=>{
          return (
             <div className='col-md-4'>
              <div className="card col-lg-4 ml-20" style={{width:18+'rem'}}>
               <img src={c.url} class="card-img-top" alt="..."/>
              <div className="card-body">
               <a className="card-text">{c.url}</a>
               <a className='card-text'>{c.url}</a>
                </div>
               </div>
              </div>  
          )
        })
      }

       
    </div>
  )
}

export default Movies
