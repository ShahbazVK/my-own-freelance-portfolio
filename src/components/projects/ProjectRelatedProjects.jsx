import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';

const ProjectRelatedProjects = () => {
	const { onlyCurrentProject } = useContext(SingleProjectContext);

	if(onlyCurrentProject.RelatedProject.Projects.length==0){
		return null
	}
	else{
		return (
			<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
					{onlyCurrentProject.RelatedProject.title}
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-4 gap-10 controlGap">
					{onlyCurrentProject.RelatedProject.Projects.map((project,key) => {
						if(key < 4)
							return (
								<Link to={`/projects/single-project/${slugify(project.title)}`}>
									<img
										src={project.img}
										className="rounded-xl cursor-pointer"
										alt={project.title}
										key={project.id}
									/>
									<p className='text-center text-primary-dark dark:text-primary-light mt-2 text-lg controlText truncateMul'>{project.title}</p>
								</Link>
							);
					})}
				</div>
			</div>
		);
	}
};

export default ProjectRelatedProjects;
