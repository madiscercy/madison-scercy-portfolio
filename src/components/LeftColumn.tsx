import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const LeftColumn = () => {
	return (
		<div className=' flex flex-col md:justify-between items-start p-2 md:p-4 md:h-screen md:overflow-y-auto y-overflow-hidden'>
			<h1 className='text-5xl font-bold'>Madison Scercy</h1>
			<p className='text-lg font-light italic'>Junior Full Stack Developer</p>
			<div className='group mt-4 mb-6'>
				<img
					src='/Madison-Scercy-Profile-Picture.jpeg'
					alt='Madison Scercy'
					className='w-48 h-48 rounded-lg shadow-lg object-cover group-hover:scale-105 transition duration-300 ease-in-out'
				/>
			</div>
			<p className='mt-4 text-left pr-4 md:pr-0'>
				Aspiring software developer with a keen interest in crafting intuitive applications. Driven by the challenge of blending
				functionality with user-centric design, I am eager to contribute fresh perspectives and collaborative energy to the tech world.
			</p>
			<div className='flex space-x-4 md:mt-auto mt-10 md:pb-40 pb-4'>
				<Link href='https://github.com/madiscercy' target='_blank' passHref>
					<span className='text-3xl hover:text-gray-700' aria-label='GitHub' rel='noopener noreferrer'>
						<FaGithub />
					</span>
				</Link>
				<Link href='https://www.linkedin.com/in/madison-scercy/' target='_blank' passHref>
					<span className='text-3xl hover:text-blue-700' aria-label='LinkedIn' rel='noopener noreferrer'>
						<FaLinkedinIn />
					</span>
				</Link>
			</div>
		</div>
	);
};

export default LeftColumn;
