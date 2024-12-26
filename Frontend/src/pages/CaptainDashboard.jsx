import React from 'react'
import { Link } from 'react-router-dom'

const CaptainDashboard = () => {
  return (
    <div>CaptainDashboard
        <Link to={'/captain/logout'}>logout</Link>
    </div>
  )
}

export default CaptainDashboard