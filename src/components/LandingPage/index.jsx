import React, { Suspense, useState } from 'react';

import Spinner from '../../utils/Spinner';
import { GlobalStyle } from '../../styles/globals';
const AboutSection = React.lazy(() => import('../AboutSection'));
const Footer = React.lazy(() => import('../Footer'));
const Header = React.lazy(() => import('../Header'));
const MapContainer = React.lazy(() => import('../MapContainer/MapContainer'));

export const UserStatus = React.createContext(null);

const LandingPage = () => {
	const [signedIn, setSignedIn] = useState(true);

	const toggleSignedIn = () => setSignedIn(prevState => !prevState);

	return (
		<UserStatus.Provider value={{ signedIn, toggleSignedIn }}>
			<div
				style={{
					minHeight: '100vh',
					position: 'relative'
				}}
			>
				<GlobalStyle />
				<Suspense fallback={<Spinner />}>
					<Header />
					<AboutSection />
					<MapContainer />
					<Footer />
				</Suspense>
			</div>
		</UserStatus.Provider>
	);
};

export default LandingPage;
