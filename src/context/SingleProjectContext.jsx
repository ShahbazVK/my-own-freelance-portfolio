import { useState, createContext, useEffect } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { useParams } from 'react-router-dom';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const params = useParams()
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson.map((el, key) => {
			if (el.ProjectHeader.title === params.name) {
				return singleProjectDataJson[key]
			}
		})
	);
	let onlyCurrentProject = singleProjectData.filter((el) => el !== undefined)
	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, onlyCurrentProject: onlyCurrentProject[0] }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
