import { useEffect, useState } from "react"
import axios from 'axios'
import { CreateFormInputWrapper, CreateFormWrapper } from "./styled"
import { useNavigate } from "react-router-dom"

// donorName
// campaignID
// amount

const CreateDonation = () => {

  const navigate = useNavigate()

  const [donorName, setDonorName] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [donationAmount, setDonationAmount] = useState('')

useEffect(()=> {
  console.log('consoling: donorName, campaignName, donationAmount:::',donorName, campaignName, donationAmount )
}, [donorName, campaignName, donationAmount])

const Base_Url = 'http://localhost:5002/api'

const handleFormSubmit=() => {
  if(donorName && campaignName && donationAmount) {
    axios.post(`${Base_Url}/donations`, {donorName, campaignName, donationAmount})
    .then(navigate('/donations'))
  } else return
}

  return (
    <CreateFormWrapper onSubmit={handleFormSubmit}>
      <CreateFormInputWrapper>
        <label htmlFor="donorName">Your Name</label>
        <input type="text" id='donorName' placeholder='Please Write Your Name' onChange={e => setDonorName(e.target.value)} />
      </CreateFormInputWrapper>
      <CreateFormInputWrapper>
        <label htmlFor='campaignName'>Which Campaign</label>
        <select id='campaignName' onChange={e => setCampaignName(e.target.value)}>
          <option  value='campaign1'>Campaign # 1</option>
          <option value='campaign2'>Campaign # 2</option>
          <option value='campaign3'>Campaign # 3</option>
          <option value='campaign4'>Campaign # 4</option>
        </select>
      </CreateFormInputWrapper>
      <CreateFormInputWrapper>
        <label htmlFor='donationAmount'>How Much</label>
        <input type="number" placeholder='100' onChange={e => setDonationAmount(e.target.value)}/>
      </CreateFormInputWrapper>
      <button>Donate</button>
    </CreateFormWrapper>
  )
}

export default CreateDonation