import React,{useState,useEffect} from 'react'
import { Doughnut } from "react-chartjs-2";
const DoughnutChart = () => {
const [applications,setApplications]=useState([])
const [jobOffers,setJobOffers]=useState([])
useEffect(() => {
allData()
},[])

const allData=async()=>{

  try{
    const result = await fetch('http://localhost:3000/api/dashboard')
    const data = await result.json()
    console.log("all",data)
    setApplications(data.applications)
    setJobOffers(data.jobOffers)
  }
  catch(err){
    console.log(err)
  }
}

    const data = {
        labels: [ "Total Job Offers", "Total Applications"],
        datasets: [
          {
            label: "My First Dataset",
            data: [applications.length, jobOffers.length],
            backgroundColor: ["#2bb66b", "#ffe702"],
            hoverOffset: 4,
          },
        ],
      };
      
      const options = {
        title: {
          display: true,
          text: "My Doughnut Chart",
        },
      };
  return (
    <div>
      <h2>Supply & Demand</h2>
       <Doughnut data={data} options={options}  class="canvadou"/>
  
    </div>
  )
}

export default DoughnutChart