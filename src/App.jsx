
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const loadCountries = () =>
fetch("https://openapi.programming-hero.com/api/all")
  .then(res=> res.json())

function App() {

  return (
    <>
      <h1>React Rest Countries</h1>
      <Suspense fallback={<p>Countries loading...</p>}>
        <Countries loadCountries={loadCountries()}></Countries>
      </Suspense>
    </>
  )
}

export default App
