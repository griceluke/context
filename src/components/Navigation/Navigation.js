import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav``;

function Navigation({ navItems }) {
	return (
		<Nav>
			{navItems.map((navItem, index) => {
				const navItemUniqueKey = `NAV_ITEM_${index}`;
				return <li key={navItemUniqueKey}>{navItem.name}</li>;
			})}
		</Nav>
	);
}

export default Navigation;
