import React, { useState } from 'react'
import './contact.css'
import { Element } from 'react-scroll'
import Textbox from '../../components/input/input'
import Button from '../../components/button/button'

export default function Contact() {
    const [fields, setFormFields] = useState({
        fullName: undefined,
        email: undefined,
        organisation: undefined,
        phone: undefined,
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
            name: "organisation",
            value: fields.organisation,
        },
        {
            type: "number",
            name: "phone",
            value: fields.phone,
        },
        {
            type: "text",
            name: "subject",
            value: fields.subject,
        },
        {
            type: "text",
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
            company: value.organisation,
            phone: value.phone,
            subject: value.subject,
            message: value.message,
        };
        submitForm(body);
    }

    async function submitForm(body) {
        try {
            // console.log(JSON.stringify(body));
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwiiO-fRyb2W1l8fcd21M3j9Ks1XCFz_Vx3RDSILk_jJ2dsLWwimJ8ChrgRhCClU4Q/exec",
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

    return (
        <Element name="contact" className="contact-container">
            <section className='contact-content'>
                <div>
                    map
                </div>
                <form
                    className="contact-form"
                    id="contact-form"
                    onSubmit={handleSubmit}
                >
                    {contactContents.map((item) => (
                        <Textbox
                            type={item.type}
                            placeholder={item.name === "fullName" ? "full name" : item.name}
                            value={item.value}
                            name={item.name}
                            handleChange={handleFieldChange}
                            required={true}
                        />
                    ))}
                    <Button btype={"btn-secondary"} type={"submit"} bTitle={"submit"} />
                </form>
            </section>
        </Element>
    )
}
