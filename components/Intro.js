import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
						{/* <div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<p className="btn btn-primary my-1 mx-3">{value.title}</p>
									</Link>
									:
									<Link key={index} href={value.link}>
										<p target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</p>
									</Link>
							))}
						</div> */}

						<div className="text-center">
							{buttons.map((value, index) => (
								value.isPrimary ? (
									<a key={index} href={value.link}>
										<p className="btn btn-primary my-1 mx-3">{value.title}</p>
									</a>
								) : (
									<a
										key={index}
										href={value.link}
										target={value.link.startsWith('mailto:') ? '_self' : '_blank'}
										rel={value.link.startsWith('mailto:') ? '' : 'noreferrer'}
									>
										<p className="btn btn-outline-primary my-1 mx-3">{value.title}</p>
									</a>
								)
							))}
						</div>


					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt="profile of odebunmi blessing"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}