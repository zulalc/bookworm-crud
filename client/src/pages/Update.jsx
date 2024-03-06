import React, { useState } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

const navigate = useNavigate() //navigate to home page
const location = useLocation() // try to take id for updating
const bookId = location.pathname.split("/")[2]

const handleChange = (e) => { //event
  setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
}

const handleClick = async (e) => {
  e.preventDefault()
  //using axios send data to backend
  try{
  await axios.put("http://localhost:8800/books/"+bookId, book)
  navigate("/")
  }catch (err) {
  console.log(err)
  }
}
  return (
    <div className='form'>
      <h1> UPDATE THE BOOK</h1>
      <input type="text" 
      placeholder="title" 
      onChange={handleChange} 
      name="title" />
      <input type="text" 
      placeholder="desc" 
      onChange={handleChange} 
      name="desc" />
      <input type="number" 
      placeholder= "price" 
      onChange={handleChange} 
      name="price" />
      <input type="text" 
      placeholder= "cover" 
      onChange={handleChange} 
      name="cover" />
      <button className='formButton' onClick={handleClick}>Update</button>
      </div>
  )
}

export default Update

