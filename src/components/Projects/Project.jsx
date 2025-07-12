import "./project.css"

import pimg1 from "../../projectimages/pimg1/Screenshot 2025-03-04 124449.png"
import pimg2 from "../../projectimages/pimg2/Screenshot 2025-03-04 124520.png"
import pimg3 from "../../projectimages/pimg3/nice chat login.png"
import pimg4 from "../../projectimages/pimg4/quickmemo.png"


function Project() {


    let img1 = pimg3
    let img2 = pimg1;
    let img3 = pimg2;


    return (
        <>
            <div className="projects">

                <div className="project-container">

                    <div className="project pone">

                        <div className="pone-media">
                            <img src={img1} alt="" />
                        </div>
                        <ul list="circle">
                            <li>
                                <a target="_blank" href="https://nice-chat-gamma.vercel.app">
                                    <h3 className="text-[#5faaff] text-xl"><span className="text-xl animate-pulse text-[#af2b2b]">Visit -- </span> Nice Chat: Real-Time Messaging App with Secure Authentication</h3>
                                </a>
                            </li>
                            <li>Built with React.js to deliver a responsive and interactive chat interface.</li>
                            <li>Designed using Tailwind CSS for sleek visuals and mobile-first responsiveness.</li>
                            <li>Implemented Socket.IO for real-time bi-directional communication between users.</li>
                            <li>Structured with Express.js and Node.js to handle backend messaging and authentication flows.</li>
                            <li>Secured using JWT-based authentication with token verification and protected middleware routes.</li>
                            <li>Configured CORS settings for safe and flexible cross-origin frontend-backend communication.</li>
                            <li>Deployed seamlessly on Vercel and Railway for a fast and scalable production environment.</li>

                        </ul>

                    </div>

                    <div className="project ptwo">

                        <div
                            className="ptwo-media">
                            <img src={img2} alt="" />
                        </div>
                        <ul>
                            <li><a target="_blank" href="https://crypto-tracker-sable-nine.vercel.app">
                            <h3 className="text-[#5faaff] text-xl"><span className="text-xl animate-pulse text-[#af2b2b]">Visit -- </span> Crypto Price Tracker: Real-Time Cryptocurrency Insights</h3></a></li>
                            <li>Built with React.js for a dynamic and interactive UI.</li>
                            <li>Styled using Tailwind CSS for a modern and responsive design.</li>
                            <li>Fetched real-time data using Axios and TanStack React Query.</li>
                            <li>Used react-content-loader for skeleton loading animations.</li>
                            <li>Enabled client-side routing with React Router DOM.</li>
                        </ul>
                    </div>

                    <div className="project pthree">
                        <div
                            className="pthree-media">
                            <img src={img3} alt="" />
                        </div>
                        <ul>
                            <li><a target="_blank" href="https://pokedex-website-blond.vercel.app">
                            <h3 className="text-[#5faaff] text-xl"><span className="text-xl animate-pulse text-[#af2b2b]">Visit -- </span>Pokedex Explorer: Pokémon Data & Stats Viewer</h3></a></li>
                            <li>Built with React.js 19 for a fast and interactive user experience.</li>
                            <li>Used React Router DOM for seamless client-side navigation between pages.</li>
                            <li>Fetched Pokémon data from an API using Axios for efficient HTTP requests.</li>
                            <li>Rendered dynamic content with React DOM to provide a smooth UI experience.</li>
                        </ul>
                    </div>

                    <div className="project pfour">
                        <div
                            className="pfour-media">
                            <img src={pimg4} alt="" />
                        </div>
                        <ul>
                            <li><a target="_blank" href="https://quickmemos.netlify.app/">
                            <h3 className="text-[#5faaff] text-xl"><span className="text-xl animate-pulse text-[#af2b2b]">Visit -- </span>QuickMemo: Write, search, store, and manage your notes effortlessly.</h3></a></li>
                            <li>Built with React.js for a dynamic and responsive user experience.</li>
                            <li>Integrated React Router DOM for seamless page navigation.</li>
                            <li>Designed a custom hook to simplify logic and state management.</li>
                            <li>Used local storage to ensure notes persist across browser sessions.</li>
                            <li>Implemented useEffect to automatically filter notes based on user input in real-time.</li>
                            <li>Created a handleSearch method that dynamically filters notes by matching their titles with the search text.</li>
                            <li>Added edit and delete features for efficient note organization.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Project
