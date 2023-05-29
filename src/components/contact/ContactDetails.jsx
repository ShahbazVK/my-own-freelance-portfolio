import { useEffect, useState } from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';


const constantEmail = "user@gmail.com"
const contacts = [
	{
		id: 1,
		name: 'Your City, Your Country',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: constantEmail,
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '555 8888 888',
		icon: <FiPhone />,
	},
];
const ContactDetails = () => {
	const [email, setEmail] = useState(constantEmail);
	useEffect(() => {
		// console.log("working")
		const handleResize = () => {
			const { beforeAt, afterAt } = splitEmailAddress();
			if (window.innerWidth <= 267) {
				setEmail(`${beforeAt}@\n${afterAt}`);
				contacts[1].name = `${beforeAt}@\n${afterAt}`
			} else {
				contacts[1].name = constantEmail
				setEmail(constantEmail);
			}
		};

		handleResize(); // Initial check based on the current width
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [window.innerWidth]);
	const splitEmailAddress = () => {
		const parts = email.split('@');
		return {
			beforeAt: parts[0],
			afterAt: parts[1]
		};
	};
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light break-words">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
