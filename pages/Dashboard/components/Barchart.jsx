import React, { useEffect ,useState} from 'react'
import { Bar } from 'react-chartjs-2'; 
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    registerables
  } from "chart.js";
  ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement,...registerables);
import { Chart as ChartComponent } from 'react-chartjs-2';
// ChartComponent.register(...registerables);



 
const Barchart = () => {
 const [monthlySubscriptions,setMonthlySubscriptions]=useState([])
 const [usersAmount,setUsersAmount]=useState([])
 const [companiesAmount,setcompaniesAmount]=useState([])
  // useEffect(() => {
  //   monthlyUsers(),allData()
  // },[])
  //   const monthlyUsers=async()=>{
  //   try{
  //     let monthly=await fetch('http://localhost:3000/api/dashboard/monthly')
  //     let data = await monthly.json()
  //   console.log("monthly",data)
  //   // setMonthlySubscriptions(data.monthly_Subscriptions)
  //  }
  //   catch(err){
  //     console.log('fetch',err)
  //   }
  //   }
  //   const allData=async()=>{

  //     try{
  //       const result = await fetch('http://localhost:3000/api/dashboard')
  //       const data = await result.json()
  //       console.log("all",data.users)
  //       // setUsersAmount(data.developers)
  //       // setcompaniesAmount(data.companies)
        
  //   console.log("companies",companiesAmount,"users",usersAmount)
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }
  const monthlyOffers=[3,2,4,5,1,6,9,8,7,4,1,5]
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Job Offers monthly count',
            data: monthlyOffers.map(ele=>ele),
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
//     const data1 = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','June','July','August','September','October','November','December'],
//       datasets: [
//         {
//           label: 'Applications monthly count',
//           data: monthlyApplications.map(ele=>ele.applications_monthly_count),
//           backgroundColor: [

//             "#ffcf5c"
//           ],
//           borderColor: [
//             "#ffcf5c"
//           ],
//           borderWidth: 1,
//         },
        
//       ],
//     };
//   const  options1= {
//       scales: {
//           y: {
//               beginAtZero: true
//           },
//       },
//   };
//   const data2 = {
//     labels: ["applicants","companies"],
//     datasets: [
//       {
//         label: 'Amount of Members live tracking',
//         data: [usersAmount.length,companiesAmount.length],
//         backgroundColor: [

//           "#ffcf5c"
//         ],
//         borderColor: [
//           "#ffcf5c"
//         ],
//         borderWidth: 1,
        
//       },
      
//     ],
//   };
// const  options2= {
//     scales: {
//         y: {
//             beginAtZero: true
//         },
//     },
// };
    

      

      
  return (
    <div>
     
        
  
 <h2>Monthly job offers</h2>
  <Bar />
  <br/>
  <h2>Monthly Applications</h2>
  <Bar />
  <br/>
  <h3>Total current users </h3>
  <Bar/>
  <br/>
        
 </div>
    
  
  )
}

export default Barchart