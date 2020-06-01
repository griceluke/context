// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc
// NA ATM

// Website, function/hooks, etc imports
// NA ATM


const Nav = styled.nav``;

function Navigation({ navItems }) {
	console.log(navItems)
	return (
		<Nav>
			{/* {navItems.map((navItem, index) => {
				const navItemUniqueKey = `NAV_ITEM_${index}`;
				return <li key={navItemUniqueKey}>{navItem.name}</li>;
			})} */}
		</Nav>
	);
}

export default Navigation;
