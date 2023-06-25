import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import { useEffect, useState } from 'react';

const AboutCounter = () => {
	function calculateYearsOfCoding() {
		var startDate = new Date(2014, 0, 1); // January is month 0 in JavaScript
		var currentDate = new Date();

		var totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
			(currentDate.getMonth() - startDate.getMonth());

		var years = Math.floor(totalMonths / 12);
		var months = (totalMonths % 12).toFixed(0);

		return years + '.' + months;
	}
	useCountUp({ ref: 'experienceCounter', end: calculateYearsOfCoding(), decimals: 1, decimal: "." });
	useCountUp({ ref: 'githubStarsCounter', end: localStorage.getItem('repos'), duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });
	useEffect(() => {
		fetch('https://api.github.com/users/ShahbazVK')
			.then(response => response.json())
			.then(data => {
				localStorage.setItem('repos', data.public_repos)
			})
	}, [])

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center flexOverride">
				<CounterItem
					title="Years of coding"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Repositories on GitHub"
					counter={<span id="githubStarsCounter" />}
				// measurement="+"
				/>

				<CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
