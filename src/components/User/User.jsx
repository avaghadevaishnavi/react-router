import React from 'react'
import { useParams } from 'react-router-dom'
// to take acces of paramter you have passed in the main.jsx

function User() {
    const{userid}=useParams()
  return (
    <div className='bg-gray-500 text-center text-white p-4'>User:{userid}</div>
  )
}

export default User