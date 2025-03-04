import "./project.css"

import pimg1 from "../../projectimages/pimg1/Screenshot 2025-03-04 124449.png"
import pimg2 from "../../projectimages/pimg2/Screenshot 2025-03-04 124520.png"
import pimg3 from "../../projectimages/pimg3/Screenshot 2025-03-04 124643.png"
import vid1 from "../../videos/vid1/Vite + React and 6 more pages - Personal - Microsoft_ Edge 2025-03-04 15-23-39 (online-video-cutter.com) (1).mp4"
import vid2 from "../../videos/vid2/Vite + React and 6 more pages - Personal - Microsoft_ Edge 2025-03-04 15-25-53 (online-video-cutter.com).mp4"
import vid3 from "../../videos/vid3/Todo Manager and 6 more pages - Personal - Microsoft_ Edge 2025-03-04 15-26-54 (online-video-cutter.com).mp4"
import { useState } from "react"

function Project() {


    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)


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

                        <div onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}
                            className="pone-media">
                            {hover1 ? <video src={video1} autoPlay loop muted></video> : <img src={img1} alt="" />}
                        </div>
                        <ul>
                            <li><h3>Crypto Price Tracker: Real-Time Cryptocurrency Insights</h3></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>

                    <div className="project ptwo">

                        <div onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}
                         className="ptwo-media">
                            {hover2 ? <video src={video2} autoPlay loop muted></video> : <img src={img2} alt="" />}
                        </div>
                        <ul>
                            <li><h3>Pokedex Explorer: Pokémon Data & Stats Viewer</h3></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    <div className="project pthree">
                        <div onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}
                         className="pthree-media">
                            {hover3 ? <video src={video3} autoPlay loop muted></video> : <img src={img3} alt="" />}
                        </div>
                        <ul>
                            <li><h3>Todo app:write,store,use and delete</h3></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Project
