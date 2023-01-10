import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={()=> navigate('/donation')}>Donate</button>
      <button onClick={()=> navigate('/donationList')}>Get Donations</button>
    </>
  )
}

export default Home