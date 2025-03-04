import "./home.css"
import profileImage from "../../profileImage/20250304_105152_0000.jpg"
import resume from "../../resume/KaranResume (2).pdf"
import js from "../../technologies/js.svg"
import react from "../../technologies/reactjs.svg"
import tailwind from "../../technologies/tailwind.svg"
import mongodb from "../../technologies/mongodb.svg"
import expressjs from "../../technologies/expressjs.svg"
import nodejs from "../../technologies/nodejs.svg"

function Home() {
    let imageUrl = profileImage

    return (
        <>
            <div className="home">
                <div className="image-container">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="about">
                    <p>I'm Karan, a dedicated full stack developer, and I absolutely love my profession. What excites me the most about web development is the joy of seeing my creations come to life right in front of my eyes. The entire process, from writing the first line of code to watching a fully functional application, is incredibly motivating. This keeps me driven to dive deeper into the world of web development and explore new technologies and techniques. Every day brings new challenges and opportunities for growth, and that's what makes this journey so rewarding for me.</p>

                    <a href={resume} download="Karan_Resume.pdf">

                        <button className="resume-btn">DOWNLOAD RESUME</button>

                    </a>
                </div>
            </div>

            <div className="technologies">
                <h1>Technologies</h1>
                <ul>
                    <li><img src={js} alt="JavaScript" /></li>
                    <li><img src={react} alt="React.js" /></li>
                    <li><img src={tailwind} alt="Tailwind CSS" /></li>
                    <li><img src={mongodb} alt="MongoDB" /></li>
                    <li><img src={expressjs} alt="Express.js" /></li>
                    <li><img src={nodejs} alt="Node.js" /></li>
                </ul>
            </div>

        </>
    )
}

export default Home