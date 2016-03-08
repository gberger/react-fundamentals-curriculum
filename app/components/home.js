import React from 'react';
import { WeatherSearchContainer } from './weather-search'
import { ResultsContainer } from './results'

export default (props) => {
  return (
    <div>
      <h2>Enter a City and State</h2>
      <WeatherSearchContainer/>
      <h3>You are searching for:</h3>
      <ResultsContainer/>
    </div>
  )
}
