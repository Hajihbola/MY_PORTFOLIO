
import profile from './profile.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { faDev } from '@fortawesome/free-brands-svg-icons';

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
	description: "A frontend software developer building visually appealing websites with codes.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1LdgqECiJkcOMR5B4lJlPXOzagsoHf6dR/view?usp=sharing",
			isPrimary: true,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Hi, I’m Blessing, a frontend developer with a people-first mindset and a passion for building digital experiences that are both functional and meaningful.",
		"I graduated from the University of Ilorin in 2019 with a B.Sc. in Human Physiology, but my curiosity for tech led me into software development. I officially kickstarted my tech journey as a Frontend Developer Intern at AFEX, a leading agro-commodity company operating across multiple countries. There, I gained hands-on experience building scalable user interfaces and collaborating within Agile teams",
		"Since then, I've grown into roles that blend technology, teamwork, and impact, from leading technical support and digital skills training at Vergold (a project backed by the World Bank and Nigeria’s Ministry of Education) to contributing to open-source projects and mentoring newer developers. My day-to-day tools include React, JavaScript, GitHub, Trello, and Google Workspace, all of which I use to design, debug, and deliver smooth user experiences.",
		"What sets me apart? I build and share with empathy, for future developers, for teammates, and for users. I care about accessibility, clean code, and clear communication. I also enjoy supporting diversity in tech and engaging with communities that help others break into the field.",
		"When I’m not coding, you’ll likely find me learning something new online, styling wigs, planning and engaging in events services, or chatting with someone interesting, I love meeting people and expanding my network.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Frontend Web Development",
			description: "I build clean, responsive, and accessible websites using modern web technologies like React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap. Whether it's a static landing page or a dynamic web app, I focus on performance, reusability, and user experience. I care about writing maintainable code, following best practices, and continuously learning to keep up with the fast-moving frontend ecosystem.",
			icons: null,
		},
		{
			title: "Tech Training & Mentorship",
			description: "I enjoy teaching and supporting others on their tech journey. I currently train beginners on HTML5, CSS3, Tailwind CSS, JavaScript, and the fundamentals of React.js — guiding them from zero experience to confidently building projects. My teaching approach is hands-on, practical, and tailored to each learner’s pace, with a focus on real-world application and long-term growth.",
			icons: null
		},
		{
			title: "Tech Stack",
			description: [
			"Languages & Frameworks: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap 5",
			"Tools & Platforms: GitHub, Google Workspace, Trello, Zoom, Canva.",
			"Other Tech: Axios, React Query, Apollo, SendFox, Dux Soup, HubSpot, Apify, Clay AI.",
			],
			icons: null
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Workbench",
			description: "Admin dashboard for tracking agrocommodities transactions and productivity over monthly and yearly periods. (HTML5, CSS3, Tailwind CSS).",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/Workbench.git",
				},
								{
					icon: faDev,
					link: "https://workbenchats.netlify.app/",
				},
			]
		},
		{
			title: "Car of the Year 2020",
			description: "Static website showcasing details of the 2020 car of the year for an automobile company. (HTML5, CSS3).",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/Car-of-the-year.git",
				},
				{
					icon: faDev,
					link: "https://car-of-the-year.netlify.app/",
				},
			]
		},
		{
			title: "Josh Comeau",
			description: "Static website displaying Josh Comeau’s documentation and resources. (HTML5, CSS3, Tailwind CSS).",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/Josh-Comeau.git",
				},
				{
					icon: faDev,
					link: "https://josh-comeau.netlify.app/",
				},
			]
		},
{
			title: "ATS Website",
			description: "AFEX TECH STARS - A private comprehensive internship program management system, covering application, selection, assessment, onboarding, and training stages. Includes an admin dashboard for managing interns’ gallery, profiles, and tech stacks. (TypeScript, Next.js, React, JavaScript, API integration).",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/ats-website.git",
				},
				{
					icon: faDev,
					link: "https://afex-ats-website.netlify.app/",
				},
			]
		},
		{
			title: "Portfolio",
			description: "Dynamic portfolio website template for showcasing projects, skills, and work as a software developer or freelancer. (JavaScript, Next.js, CSS3, Bootstrap).",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Hajihbola/My-Portfolio",
				},
				{
					icon: faDev,
					link: "https://odebunmi-blessing.netlify.app/",
				},
			]
		},
				{
			title: "skillkernel23",
			description: "Static website displaying courses of an online learning designed for an educational organization (HTML5, CSS3, Bootstrap5).",
			icons: [
				{
					icon: faGithub,
					link:"https://github.com/Hajihbola/SkillKernel23.git",
				},
				{
					icon: faDev,
					link: "https://skillkernel23.netlify.app/",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: [
		"Open to collaboration, full-time or part-time or contract roles, or just tech talk. Please do not hesitate to schedule a meeting.",
		"Alternatively, feel free to reach out directly by email at ajibolablessing3@gmail.com.",
	],
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