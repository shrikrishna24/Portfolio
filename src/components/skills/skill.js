import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaGitAlt, FaGithub, FaBitbucket } from "react-icons/fa";
import { SiJirasoftware, SiTailwindcss, SiExpress } from "react-icons/si";
import './skill.css';

export default function Skill() {
    const [showAllSkills, setShowAllSkills] = useState(false);

    const aboutSkills = [
        {
            icon: <FaHtml5 size={20} />,
            title: "Html",
        },
        {
            icon: <FaCss3 size={20} />,
            title: "CSS",
        },
        {
            icon: <FaJs size={20} />,
            title: "Javascript",
        },
        {
            icon: <FaReact size={20} />,
            title: "React",
        },
        {
            icon: <FaFigma size={20} />,
            title: "Figma",
        },
        {
            icon: <FaGitAlt size={20} />,
            title: "Git",
        },
        {
            icon: <FaGithub size={20} />,
            title: "Github",
        },
        {
            icon: <FaBitbucket size={20} />,
            title: "Bitbucket",
        },
        {
            icon: <SiJirasoftware size={20} />,
            title: "Jira",
        },
        {
            icon: <SiTailwindcss size={20} />,
            title: "Tailwind",
        },
        {
            icon: <SiExpress size={20} />,
            title: "Express.js",
        },

    ];

    const displayedSkills = showAllSkills ? aboutSkills : aboutSkills.slice(0, 6);

    return (
        <React.Fragment>
            <ul className='skill-icon'>
                {displayedSkills.map((item, index) => (
                    <li key={index}>
                        <span>{item.icon}</span>
                        <p className='skill-list'>{item.title}</p>
                    </li>
                ))}
                {!showAllSkills && (
                    <li>
                        <a className='readmore-skill' onClick={() => setShowAllSkills(true)}>
                            ....Read more
                        </a>
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}
