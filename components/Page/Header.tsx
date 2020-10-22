import React from 'react';
import Navigation from './Navigation';
import Carousel from '../Items/Carousel';
import Vars from '../../helpers/Vars';

interface Props {
	data?: any;
	allPages?: any;
	siteSettings?: any;
	slides?: any;
}

const Header = (props: Props) => {
	return (
		<header id="mainHeader">
			<Navigation {...props} />
		</header>
	);
}
export default Header;