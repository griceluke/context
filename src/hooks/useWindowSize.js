import { useEffect, useState } from 'react';

const RESIZE_EVENT_NAME = 'resize';

const getSize = () => {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	};
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState(getSize());

	const handleResize = () => {
		setWindowSize(getSize());
	}

	useEffect(() => {
		window.addEventListener(RESIZE_EVENT_NAME, handleResize);
		return (
            () => window.removeEventListener(RESIZE_EVENT_NAME, handleResize)
        );
	});

	return windowSize;
}

export default useWindowSize;
