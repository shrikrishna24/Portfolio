import React, { useState } from 'react'
import './contact.css'
import { Element } from 'react-scroll'
import Textbox from '../../components/input/input'
import Button from '../../components/button/button'
import { useTypewriter } from 'react-simple-typewriter'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";


export default function Contact() {

    const [typeEffect] = useTypewriter({
        words: ['To build Journeys.', ' To collab Ideas.', 'To grow Together.', 'To get free Quote.',],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 15
    })

    const [fields, setFormFields] = useState({
        fullName: undefined,
        email: undefined,
        subject: undefined,
        message: undefined,
    });


    let contactContents = [
        {
            type: "text",
            name: "fullName",
            value: fields.fullName,
        },
        {
            type: "email",
            name: "email",
            value: fields.email,
        },
        {
            type: "text",
            name: "subject",
            value: fields.subject,
        },
        {
            type: "textarea",
            name: "message",
            value: fields.message,
        },
    ];

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        const body = {
            fullName: value.fullName,
            email: value.email,
            subject: value.subject,
            message: value.message,
        };
        submitForm(body);
    }

    async function submitForm(body) {
        try {
            // console.log(JSON.stringify(body));
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbx85sn95s2BtyqBz0G_LLSwiobdxr5DZK3P_LNjr8FV15M7Fjju0cXx5n9BXse1Up-I/exec",
                {
                    method: "POST",
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }
            );

            if (response) {
                // Request was successful
                alert("Form submitted successfully");
                setFormFields({
                    fullName: "",
                    email: "",
                    organisation: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                // Request failed
                console.warn("Failed to send email");
            }
        } catch (err) {
            alert("Form cannot be submit ");
        }
    }

    const socialLinks = [
        {
            link: 'mailto:121krishnavishwkarma',
            icons: <FaEnvelope size={20} />,
            title: '121krishnavishwakarma@gmail.com'
        },
        {
            link: "https://www.linkedin.com/in/krishna-vishwakarma-085ba6214/",
            icons: <FaLinkedinIn size={20} />,
            title: 'Connect on Linkedin'
        },
        {
            link: "https://instagram.com/krishna__vishwakarma_?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr",
            icons: <FaInstagram size={20} />,
            title: 'Follow on Instagram'
        },
        {
            link: "https://github.com/shrikrishna24",
            icons: <FaGithub size={20} />,
            title: 'Build on Github'
        }
    ]

    return (
        <Element name="contact" className="contact-container">
            <section className='contact-content'>
                <div className='contact-text'>
                    <div>
                        <h1 className='contact-heading'> Contact <span style={{ color: '#1b365d' }}>{typeEffect}</span></h1>
                    </div>
                    <ul className='social-links'>
                        {socialLinks.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target={item.title !== '121krishnavishwakarma@gmail.com' ? "_blank" : "_self"}
                                        rel={item.title !== '121krishnavishwakarma@gmail.com' ? "noopener noreferrer" : ""}
                                    >

                                        <p>{item.icons} <span>{item.title}</span></p>
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <form
                    className="contact-form"
                    id="contact-form"
                    onSubmit={handleSubmit}
                >
                    <div className='form-fields'>
                        {contactContents.map((item, index) => (
                            <Textbox
                                index={index}
                                type={item.type}
                                placeholder={item.name === "fullName" ? "full name" : item.name}
                                value={item.value}
                                name={item.name}
                                handleChange={handleFieldChange}
                                required={true}
                            />
                        ))}
                    </div>
                    <div className='form-button'>
                        <Button btype={"btn-secondary"} type={"submit"} bTitle={"submit"} />
                    </div>
                </form>
            </section>
        </Element>
    )
}
