import Link from 'next/link';
import { FaAngular, FaAws, FaDatabase, FaMobileAlt, FaPython, FaReact } from 'react-icons/fa'; // Include additional icons as needed
import { SiFlutter, SiSwift } from 'react-icons/si';

const RightColumn = () => {
	const projects = [
		{
			name: 'Art Alchemy',
			description: 'Create art from your photos.',
			image: '/art-alchemy-logo.png',
			url: 'https://artalchemy.io',
			techStack: [<FaAws key='aws' />, <FaPython key='python' />, <FaAngular key='angular' />, <FaReact key='react' />],
		},
	];

	return (
		<div>
			<h2 className='text-2xl font-semibold'>Projects</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-4 sm:px-0'>
				{projects.map((project) => (
					<div key={project.name} className='bg-white rounded-lg shadow-lg overflow-hidden project-card'>
						<Link href={project.url} target='_blank' className='hover:scale-105'>
							<span rel='noopener noreferrer'>
								<img src={project.image} alt={project.name} className='w-full h-48 object-cover' />
							</span>

							<div className='p-4'>
								<h3 className='text-lg font-bold'>{project.name}</h3>
								<p className='text-sm'>{project.description}</p>
								<div className='flex space-x-2 mt-2'>{project.techStack}</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default RightColumn;
