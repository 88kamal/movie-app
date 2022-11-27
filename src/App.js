// import React, {useState} from "react";
import './App.css';
// import axios from "axios";
// import Navbar from "./components/Navbar";

// function App() {
//   // const [movie, setMovie] = useState([])
//   // const fetchMovie = () =>{
//   //   axios.get("https://omdbapi.com/?s=kabhi&apikey=a1de9591")
//   //   .then((response)=>{
//   //     console.log(response)
//   //     setMovie(response.data.Search)
//   //   })

//   // }
//   return (
//    <>
//       {/* <button onClick={fetchMovie}>Fetch Movie</button>
//       {
//         movie.map((value, index)=>{
//          return ( 
//          <h1 key={index}>{value.Title}</h1>
//          );
//         })
//       } */}
//       <Navbar/>
//    </>
//   );
// }

// export default App;


import axios from 'axios'
import React, { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])
  const onChange = (e) => {
    setText(e.target.value)
  }
  const getMovie = (e) => {
    e.preventDefault();
    axios.get(`https://omdbapi.com/?s=${text}&apikey=a1de9591`)
      .then((res => {
        console.log(res)
        setMovie(res.data.Search)
      }))
  }
  return (
    <>
    <div className=' bg'>
    <nav className="navbar navbar-expand-lg sticky-top " style={{
    background: 'rgb(51 60 186)'
  }}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            <img  width={45} src="clipart3105859.png" alt="" /> <span className=' mx-1 fw-bold'>MovieMaSala</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#"></a>
              </li>
            </ul>
            <form onSubmit={getMovie} className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={onChange} />
              <button className="btn " type="submit" style={{
    background: '#00ffe9'}}>Search</button>
            </form>
          </div>
        </div>
      </nav>

      <h1 className=' text-center text-light fw-bold my-3'>Unlimited movies, TV <br />
      shows and more.
      <h5>Watch anywhere. Cancel anytime.</h5> </h1>



      <div className="container my-2  ">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-md my-3">
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={value.Poster} className="card-img-top bg-image  " alt="..." />

                    <div className="card-body">
                      <h3 className="card-title">Year: {value.Year}</h3>
                      <h4 className="card-title"> {value.Title}</h4>

                     
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App
