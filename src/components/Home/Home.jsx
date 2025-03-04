import "./home.css"
import profileImage from "../../profileImage/20250304_105152_0000.jpg"

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

                    <button className="resume-btn">DOWNLOAD RESUME</button>
                </div>
            </div>

        </>
    )
}

export default Home