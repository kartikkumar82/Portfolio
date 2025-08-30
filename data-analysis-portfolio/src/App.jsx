import React from 'react'
import { useState } from 'react'
import DataVisualization from './components/DataVisualization'
import './styles/index.css'
import sampleData from './data/sample-data'

function App() {
  const [data, setData] = useState(sampleData)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Data Analysis Portfolio
      </h1>
      <DataVisualization data={data} />
    </>
  )
}

export default App