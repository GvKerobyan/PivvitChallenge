import axios from 'axios'
import React, { useEffect } from 'react'
import { DonationListWrapper, DonationListItem } from './styled'

const DonationLists = () => {
  const Base_Url = 'http://localhost:5002/api'
  useEffect(() => {
    axios.get(`${Base_Url}/donations`)
  }, [])
  return (
    <DonationListWrapper>
      <h1>All Donations</h1>
      <DonationListItem></DonationListItem>
    </DonationListWrapper>
  )
}

export default DonationLists