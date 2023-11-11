import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
      <div className='text-center bg-gray-700 p-4 text-orange-400 text-3xl'>User: {userid}</div>
  )
}

export default User