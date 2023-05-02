import React,{useState} from 'react'
import "../../vues/Dashboard/Dashboard.css"
import Barchart from '../../components/dashboard/Barchart.jsx'
import Users from '../../components/dashboard/Users.jsx'
import Statistics from "../../components/dashboard/Statistics.jsx"
import { Route, Routes, Router } from "react-router-dom";
import { Link } from "react-router-dom";
const Dashboard = () => {
   const [query, setQuery] = useState('')
   const  [view,setView] = useState("statistics")
   function handleInputChange(event) {
     setQuery(event.target.value)
   }
 
   function handleSubmit(event) {
     event.preventDefault()
    
   }
  return (
    <div class="dashboard">
    


    {/* <nav className=" nav fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
             
                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav> */}
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="  fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto aside ">
      <ul class="space-y-2">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
              
               <span class="ml-3">logo</span>
            </a>
         </li>
         <li>
         
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="flex-1 ml-3 text-white whitespace-nowrap" onClick={e=>setView("statistics")} >Dashboard</span>
             </a>
         
         </li>
        
         <li>
      
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:hover:bg-gray-700 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 text-white whitespace-nowrap" onClick={e=>setView("users")}>Users</span>
            </a>
            
      
         </li>
        
        
        
      </ul>
   </div>
</aside>

<div class="p-4 sm:ml-64 ">


{view==='statistics' && 
<Statistics/> }

{view==='users' && 
<Users/> }

            

           
           
 


</div>

    </div>
  )
}

export default Dashboard