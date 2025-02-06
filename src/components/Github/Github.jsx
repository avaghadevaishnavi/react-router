import React, {useState, useEffect } from 'react'

function Github() {
    const [data, setdata] = useState([])
    // to load the componenet
    // after loading component you want to display data or to run partcular function ypu can use this hook
    useEffect(() => {
    fetch('https://api.github.com/users/avaghadevaishnavi')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        setdata(data)
    })
    }, [])

  return (
    
    <div className='text-center items-center m-4 bg-gray-500 text-white p-4 text-2xl'>Github followers:{data.followers}
    <div className='text-center items-center  m-4 bg-gray-500 text-white p-4 text-2xl'> following{data.following}
    <img  src={data.avatar_url} alt="my profile" width={300} />
    </div>
     </div>
  )
}

export default Github