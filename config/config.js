
import profile from './profile.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Blessing",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Odebunmi Blessing",
	description: "A frontend software developer creating websites.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1qiZu9hMTHGr9dCBK8HWmWYXiRUH7hVye/view?usp=drive_link",
			isPrimary: true,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from University of Ilorin in 2019 with a bachelor of science degree in Physiology. I kick started my professional tech career as a frontend software developer working onsite as an intern for a multinational agrocommodity company that has its branches in a couple of countries — AFEX. I have also contributed in open source projects.",
		"I as well currently work as the Head of Technical Support Officer at Vergold where we are presently working on a Skillup Digital Skills Training project, sponsored by the Federal Ministry of Education Ideas Project(Nigeria) and the World Bank and also a frontend developer",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping new developers, and supporting organizations to promote diversity in tech.",
		"When I’m not programming, I focus on my hobbies which are: surfing the internet, creative skills such as wig making or revamping and event services amongst others, meeting people and growing my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Web Development",
			description: "I create responsive static and dynamic responsive websites using Reactjs, Typescript, JavaScript, HTML5, CSS3, TailwindCSS, Next.js mainly.",
			icons: null,
		},
		{
			title: "Training",
			description: "I confidently tutor interested great minds on HTML5, CSS3, TailwindCSS, basics of JavaScript and Reactjs currently from zero knowledge in tech into an intermediate.",
			icons: null
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Workbench",
			description: "An admin page view that shows, tracks information of agrocommodities' transactions and productivity throughout the month/year.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/Workbench.git",
				},
			]
		},
		{
			title: "Car of the Year 2020",
			description: "A static website that gives you information about the 2020 car of the year of an automobile company.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/Car-of-the-year.git",
				},
			]
		},
		{
			title: "Josh Comeau",
			description: "A static website that displays the Josh Comeau documentation.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/Josh-Comeau.git",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that showcases projects worked on, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/My-Portfolio",
				},
			]
		},

	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at ajibolablessing3@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:your-ajibolablessing3@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Odebunmi Blessing | Frontend Software Developer| Reactjs developer| Technical Support Officer",
	description: "I create responsive websites for small, mediun, large scale businesses and individuals as I offer the neccessary technical support needed to my clientele. I graduated from University of Ilorin in 2019 with a bachelor of science degree in Physiology, and started my tech journey since then progressively.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hajihbola",
	description: "Frontend Software Developer | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/Hajihbola/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/blessing-odebunmi-48aa001b3/",
		},
	]
}