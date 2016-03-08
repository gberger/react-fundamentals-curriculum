import React from 'react';
import { connect } from 'react-redux'

export function WeatherSearch ({searchCity}) {
 return (
   <div>
     <input type="text" ref={(ref) => this.input = ref}/>
     <button type="button" onClick={() => searchCity(this.input.value)}>Get Weather</button>
   </div>
 )
}

const mapStateToProps = null;

function mapDispatchToProps (dispatch) {
  return {
    searchCity: (city) => {
      return dispatch({
        type: 'SEARCH_CITY',
        city: city
      });
    }
  }
};

export const WeatherSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherSearch);
