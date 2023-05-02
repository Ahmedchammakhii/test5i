import React, { useEffect ,useState} from 'react'
import { Bar } from 'react-chartjs-2';

// import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    registerables
  } from "chart.js";
  ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement,...registerables);




// import { Chart as ChartComponent, registerables } from 'react-chartjs-2';
// Chart.register(...registerables);



 
const Barchart = () => {
 const [usersAmount,setUsersAmount]=useState([])
 const [companiesAmount,setcompaniesAmount]=useState([])
  useEffect(() => {
    monthlyData(),allData()
  },[])
    const users=async()=>{
    try{
      let monthlyusers=await fetch('http://localhost:3000/api/dashboard/monthly')
      let data = await monthlyusers.json()
    console.log("monthly",data)
    setMonthlyOffers(data.monthly_jobOffers)
    setMonthlyApplications(data.monthly_applications)
  
    }
    catch(err){
      console.log('fetch',err)
    }
    }
    const allData=async()=>{

      try{
        const result = await fetch('http://localhost:3000/api/dashboard')
        const data = await result.json()
        console.log("all",data.developers)
        setUsersAmount(data.developers)
        setcompaniesAmount(data.companies)
        
    console.log("companies",companiesAmount,"developers",usersAmount)
      }
      catch(err){
        console.log(err)
      }
    }
  
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Job Offers monthly count',
            data: monthlyOffers.map(ele=>ele.job_offers_monthly_count),
            backgroundColor: [

              "#ffcf5c"
            ],
            borderColor: [
              "#ffcf5c"
            ],
            borderWidth: 1,
          },
          
        ],
      };
    const  options= {
        scales: {
            y: {
                beginAtZero: true
            },
        },
    };
    const data1 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','June','July','August','September','October','November','December'],
      datasets: [
        {
          label: 'Applications monthly count',
          data: monthlyApplications.map(ele=>ele.applications_monthly_count),
          backgroundColor: [

            "#ffcf5c"
          ],
          borderColor: [
            "#ffcf5c"
          ],
          borderWidth: 1,
        },
        
      ],
    };
  const  options1= {
      scales: {
          y: {
              beginAtZero: true
          },
      },
  };
  const data2 = {
    labels: ["applicants","companies"],
    datasets: [
      {
        label: 'Amount of Members live tracking',
        data: [usersAmount.length,companiesAmount.length],
        backgroundColor: [

          "#ffcf5c"
        ],
        borderColor: [
          "#ffcf5c"
        ],
        borderWidth: 1,
        
      },
      
    ],
  };
const  options2= {
    scales: {
        y: {
            beginAtZero: true
        },
    },
};
    

      

      
  return (
    <div>
     
        
  
 <h2>Monthly job offers</h2>
  <Bar data={data}  options={options}/>
  <br/>
  <h2>Monthly Applications</h2>
  <Bar data={data1} options={options1}/>
  <br/>
  <h3>Total current users </h3>
  <Bar data={data2} options={options2}/>
  <br/>
        
         </div>
    
  
  )
}

export default Barchart