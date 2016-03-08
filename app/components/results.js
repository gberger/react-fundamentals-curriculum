import React from 'react';
import { connect } from 'react-redux'

export function Results ({city}) {
  return (
    <p>{city}</p>
  )
}

const mapStateToProps = (state) => {
  return {
    city: state.city
  }
};

export const ResultsContainer = connect(
  mapStateToProps,
  null
)(Results);
