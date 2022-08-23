import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Marketing Strategist</title>
        <meta property="og:title" content="Corporate Marketing Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
