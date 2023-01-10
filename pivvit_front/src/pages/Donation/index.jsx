import React from 'react'
import CreateDonation from '../../forms/CreateDonations'
import { DonationPageContainer } from './styled'

const Donation = () => {
  return (
    <DonationPageContainer>
      <CreateDonation />
    </DonationPageContainer>
  )
}

export default Donation