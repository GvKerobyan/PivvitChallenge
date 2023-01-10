import { PageWrapper } from './layouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Donation, Home, DonationList } from './pages';
import { useState } from 'react';

function App() {
  const [donationsList, setDonationsList] = useState([])
  // const [donations, setDonations] = useState()

	return (
		<Router>
			<div className='app'>
				<PageWrapper>
					<Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/donationList' element={<DonationList setDonationsList={setDonationsList} donationsList={donationsList} />} />
					</Routes>
				</PageWrapper>
			</div>
		</Router>
	);
}

export default App;
