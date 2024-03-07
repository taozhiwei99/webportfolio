import React from 'react';
import './contact.css';
import {FaEnvelope, FaPhone, FaGithub} from 'react-icons/fa';

function Contact() {
    const informationData = [
        { icon: <FaEnvelope className="contact-icon" />, text: "rexzhiwei@hotmail.com" },
        { icon: <FaPhone className="contact-icon" />, text: "+65 9790 9677" },
        { icon: <FaGithub className="contact-icon" />, text: "https://github.com/taozhiwei99" }
    ];

    return (
        <div className="contact-container">
            <div className="contact-header">Contact Me</div>
            <div className="contact-info">
                {informationData.map((item, index) => (
                    <div className="contact-item" key={index}>
                        {item.icon}
                        {item.text.startsWith("https://github.com") ? (
                            <a href={item.text} target="_blank" rel="noopener noreferrer" className="contact-link">
                                {item.text}
                            </a>
                        ) : (
                            <span className="contact-text">{item.text}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;