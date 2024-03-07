import React from 'react';
import './home.css';
import mePhoto from '../assets/selfie.jpg'
import myResume from '../assets/ZHIWEI_RESUME.pdf'

function Home() {
    const resumePath = myResume;

    function downloadFile() {
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = "ZHIWEI_RESUME.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return(
        <div className="home-container">
            <div className="imageDisplay">
                <img src={mePhoto} alt="Circle" className="meImage" />
            </div>
            <div className="textMsg">
                <p className="messages">
                    Hi, I am Zhi Wei! <br/>Welcome to my website!<br/>
                    This website is self-built with React JS
                </p>
            </div>
            <div className="textBox">
                <div className="headerbox">About Me</div>
                <p className="details">
                Recent Computer Science grad from the University of Wollongong. 
                Passionate about coding and solving problems. 
                Seeking new opportunities to learn and grow in the tech industry!
                </p>
                <button className="downloadButton" 
                onClick={downloadFile}>Downlod Resume</button>
            </div>
        </div>
    )
}

export default Home;