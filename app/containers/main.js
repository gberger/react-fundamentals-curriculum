import React from 'react';
import { Link, browserHistory } from 'react-router'

export default (props) => {
  return (
    <div>
      <header>
        <h1>My First React App</h1>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  )

  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{props.children}</div>
    </div>
  )
}
