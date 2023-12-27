'use client';

import { useEffect, useState } from 'react';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from './particles.json';
import { ISourceOptions } from '@tsparticles/engine';

export default function Home() {
	const [lightBgStyle, setLightBgStyle] = useState({ opacity: 1, transition: 'opacity 0.3s ease-in-out' });
	const [darkBgStyle, setDarkBgStyle] = useState({ opacity: 0, transition: 'opacity 0.3s ease-in-out' });
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		<>
			<div className='app'>
				<div className='particles-container'>{init && <Particles options={particlesOptions as ISourceOptions} />}</div>

				<div className='bg-light-mode' style={lightBgStyle}></div>
				<div className='bg-dark-mode' style={darkBgStyle}></div>
				<div className='container mx-auto ps-4 pt-4 md:pt-16 md:ps-16 md:h-full h-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 h-auto'>
						<div className='md:col-span-1 md:h-screen h-auto overflow-hidden'>
							<LeftColumn />
						</div>
						<div className='col-span-1'>
							<RightColumn />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
