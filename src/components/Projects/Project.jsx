import "./project.css"

import pimg1 from "../../projectimages/pimg1/Screenshot 2025-03-04 124449.png"
import pimg2 from "../../projectimages/pimg2/Screenshot 2025-03-04 124520.png"
import pimg3 from "../../projectimages/pimg3/Screenshot 2025-03-04 124643.png"
import vid1 from "../../videos/vid1/Vite + React and 6 more pages - Personal - Microsoft_ Edge 2025-03-04 15-23-39 (online-video-cutter.com) (1).mp4"
import vid2 from "../../videos/vid2/Vite + React and 6 more pages - Personal - Microsoft_ Edge 2025-03-04 15-25-53 (online-video-cutter.com).mp4"
import vid3 from "../../videos/vid3/Todo Manager and 6 more pages - Personal - Microsoft_ Edge 2025-03-04 15-26-54 (online-video-cutter.com).mp4"
import { useState } from "react"

function Project() {



    let img1 = pimg1;
    let img2 = pimg2;
    let img3 = pimg3;
    let video1 = vid1;
    let video2 = vid2;
    let video3 = vid3


    return (
        <>
            <div className="projects">

                <div className="project-container">

                    <div className="project pone">

                        <div className="pone-media">
                            <img src={img1} alt="" />
                        </div>
                        <ul list="circle">
                            <li><a target="_blank"  href="https://crypto-tracker-sable-nine.vercel.app"><h3>Crypto Price Tracker: Real-Time Cryptocurrency Insights</h3></a></li>
                            <li>Built with React.js for a dynamic and interactive UI.</li>
                            <li>Styled using Tailwind CSS for a modern and responsive design.</li>
                            <li>Fetched real-time data using Axios and TanStack React Query.</li>
                            <li>Used react-content-loader for skeleton loading animations.</li>
                            <li>Enabled client-side routing with React Router DOM.</li>
                        </ul>

                    </div>

                    <div className="project ptwo">

                        <div 
                            className="ptwo-media">
                             <img src={img2} alt="" />
                        </div>
                        <ul>
                            <li><a target="_blank"  href="https://pokedex-website-blond.vercel.app"><h3>Pokedex Explorer: Pokémon Data & Stats Viewer</h3></a></li>
                            <li>Built with React.js 19 for a fast and interactive user experience.</li>
                            <li>Used React Router DOM for seamless client-side navigation between pages.</li>
                            <li>Fetched Pokémon data from an API using Axios for efficient HTTP requests.</li>
                            <li>Rendered dynamic content with React DOM to provide a smooth UI experience.</li>
                        </ul>
                    </div>

                    <div className="project pthree">
                        <div 
                            className="pthree-media">
                            <img src={img3} alt="" />
                        </div>
                        <ul>
                            <li><a target="_blank" href="https://react-todo-app-pearl-zeta.vercel.app"><h3>Todo app:write,store,use and delete</h3></a></li>
                            <li>Built with React.js for a dynamic and interactive UI.</li>
                            <li>Implemented local storage to persist tasks even after page refresh.</li>
                            <li>Enabled task completion toggling with a checkbox system.</li>
                            <li>Added edit and delete functionality for better task management.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Project
