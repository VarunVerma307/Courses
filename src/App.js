
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {api,filterdata} from './data.js';
import {toast} from 'react-toastify'

function App() {
  const [courses,setcourses]=useState(null);
   useEffect (() =>{
    async function fetchdata(){
      try{
         const res= await fetch(api);
         const data= await res.json();
         setcourses(data.data);
      }
      catch(error){
          toast.error("Something went Wrong");
      }
    }
    fetchdata();
},[] );
  return (
   <div>
     <Navbar/>
     <Filter filterdata={filterdata}/>
     <Cards courses={courses}/>
   </div>
  );
}

export default App;
