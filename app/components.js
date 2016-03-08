import React from 'react'
import { Link, browserHistory } from 'react-router'

export const Main = React.createClass({
  render () {
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
        <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
      </div>
    )
  }
});

export function Foo(props) {
  return <span>foo...</span>
}

export function Bar(props) {
  return <span>bar!</span>
}
