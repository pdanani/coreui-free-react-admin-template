import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import dataset from './data.json'
const LineChart = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  console.log(dataset[231])
  let dates = []
  let fully_vaccinated = []
  for (let x of dataset[231].data) {
    console.log(x.date)
    dates.push(x.date)
  }
  for (let x of dataset[231].data) {
    fully_vaccinated.push(x.people_fully_vaccinated)
  }

  console.log(dataset[231].data[0].date)

  return (
    <CChartLine
      style={{ height: '300px', marginTop: '40px' }}
      data={{
        labels: dates,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
            borderColor: getStyle('--cui-info'),
            pointHoverBackgroundColor: getStyle('--cui-info'),
            borderWidth: 2,
            data: fully_vaccinated,
            fill: true,
          },
        ],
      }}
      options={{
        //styling of the chart
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },
          y: {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250,
            },
          },
        },
        elements: {
          line: {
            tension: 0.4,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
      }}
    />
  )
}
export default LineChart
