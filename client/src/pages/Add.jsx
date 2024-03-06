import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

const navigate = useNavigate() //navigate to home page

const handleChange = (e) => { //event
  setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
}

const handleClick = async (e) => {
  e.preventDefault()
  //using axios send data to backend
  try{
  await axios.post("http://localhost:8800/books", book)
  navigate("/")
  }catch (err) {
  console.log(err)
  }
}
  return (
    <div className='form'>
      <h1> ADD NEW BOOK</h1>
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
      <button className='formButton' onClick={handleClick}>Add</button>
      </div>
  )
}

export default Add
