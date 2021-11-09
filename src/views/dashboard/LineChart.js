import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const LineChart = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  return (
    <CChartLine
      style={{ height: '300px', marginTop: '40px' }}
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
            borderColor: getStyle('--cui-info'),
            pointHoverBackgroundColor: getStyle('--cui-info'),
            borderWidth: 2,
            data: [
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
            ],
            fill: true,
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: getStyle('--cui-success'),
            pointHoverBackgroundColor: getStyle('--cui-success'),
            borderWidth: 2,
            data: [
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
              random(50, 200),
            ],
          },
          {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: getStyle('--cui-danger'),
            pointHoverBackgroundColor: getStyle('--cui-danger'),
            borderWidth: 1,
            borderDash: [8, 5],
            data: [65, 65, 65, 65, 65, 65, 65],
          },
        ],
      }}
      options={{
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
