import React from 'react'
import Barchart from './Barchart'
import DoughnutChart from './DoughnutChart'
import Linechart from './Linechart'
import Piechart from './Piechart'


const Dashboard = () => {
  return (
    <div>

      <div class="grid grid-cols-2 gap-1  divstat ">
        <div class="bar"><Barchart /></div>
        <div class="line"><Linechart /></div>
        <div class="Pie"> <Piechart /></div>
        <div class="Doughnut"> <DoughnutChart /></div>


      </div>





    </div>
  )
}

export default Dashboard
