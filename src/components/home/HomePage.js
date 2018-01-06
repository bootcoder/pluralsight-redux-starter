import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router'

class HomePage extends Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>PluralSight Admin</h1>
        <p>React, ReDux and Router in ES6 for ultra responsive web apps.</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
      </div>
    )
  }
}

export default HomePage
