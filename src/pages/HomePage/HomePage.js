// External imports
import React, { useContext } from 'react';

// Internal global imports inlcluding external imports within them
import { GenderDataContext } from '../../components/genderContext/genderDataContext';

// Website imports
import ToggleGender from '../../components/ToggleGender';
import ClearGender from '../../components/ClearGender';
import WeeklyOpeningTimes from '../../components/WeeklyOpeningTimes';

function HomePage() {
	const { currentGenderData } = useContext(GenderDataContext);

	return (
		<>
			<h1>Taylors &amp; Co Hair and Barbering</h1>
			{currentGenderData && (
				<h2>
					{'The ' +
						currentGenderData.nameCap +
						' ' +
						currentGenderData.salonType}
				</h2>
			)}
			<ToggleGender />
			<br />
			<ClearGender>Reset website gender choice</ClearGender>

			<WeeklyOpeningTimes />
		</>
	);
}

export default HomePage;

// // External imports
// import React, { Fragment, useRef } from 'react';
// import styled from 'styled-components';
// import {useSprings, animated} from 'react-spring'

// // Internal global imports inlcluding external imports within them
// import clamp from 'lodash/clamp'
// import { useGesture } from 'react-use-gesture'

// // Website imports

// const Section = styled(animated.section)`
// 	/* height: calc(100% - 2em);
//     width: calc(100% - 2em);
// 	padding: 1em;
// 	display: inline-flex; */
// `;

// function HomePage( {pageData} ) {

// 	const index = useRef(0)
// 	const [props, set] = useSprings(pageData.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
// 	const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
// 		if (down && distance > window.innerWidth / 2) {
// 			cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pageData.length - 1)))
// 			set(i => {
// 				if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
// 				const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
// 				const sc = down ? 1 - distance / window.innerWidth / 2 : 1
// 				return { x, sc, display: 'block' }
// 			})
// 		}
// 	})
// 	console.log(props);
// 	return (
// 		<Fragment>

// 				{props.map(({ x, display, sc }, i) => (
// 					<Section {...bind()} key={`SECTION_${i}`} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
// 						<animated.div style={{ transform: sc.interpolate(s => `scale(${s})`) }} >

// 								<h1>{pageData[i].content.title}</h1>
// 								<img src={pageData[i].content.image.src} alt={pageData[i].content.image.alt} width={pageData[i].content.image.width} />
// 								<p>{pageData[i].content.paragraph}</p>
// 								<a href={pageData[i].content.link.href} title={pageData[i].content.link.title} target={pageData[i].content.link.target}>{pageData[i].content.link.text}</a>

// 						</animated.div>
// 					</Section>
// 				))}

// 		</Fragment>
// 	)
// }

// export default HomePage;
