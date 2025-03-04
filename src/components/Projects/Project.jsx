import "./project.css"

import pimg1 from "../../projectimages/pimg1/Screenshot 2025-03-04 124449.png"
import pimg2 from "../../projectimages/pimg2/Screenshot 2025-03-04 124520.png"
import pimg3 from "../../projectimages/pimg3/Screenshot 2025-03-04 124643.png"
import vid1 from "../../videos/vid1/Untitled design.mp4"
import vid2 from "../../videos/vid2/Untitled design (1).mp4"
import { useState } from "react"

function Project() {

    const [vidDisplay, setVidDisplay] = useState("none")
    const [imgDisplay, setImgDisplay] = useState("block")

    
    function mouseover(e){
        
        e.target(setVidDisplay("block"))
        e.target(setImgDisplay("none"))
    }

    function mouseLeave(e){
        setVidDisplay("none")
        setImgDisplay("block")
    }

    let img1 = pimg1;
    let img2 = pimg2;
    let img3 = pimg3;
    let video1 = vid1;
    let video2 = vid2;


    return (
        <>
            <div className="projects">

                <div onMouseEnter={(e)=>mouseover(e)}
                        onMouseLeave={(e)=>mouseLeave(e)}   className="project-container">

                    <div className="project pone">
                        <div 
                        
                        
                        className="pone-media">
                            <img style={{ display: imgDisplay }} src={img1} alt="" />
                            <video style={{ display: vidDisplay }} src={video1} autoPlay loop muted></video>
                        </div>
                        <p>Pokedex Explorer: Pokémon Data & Stats Viewer</p>
                    </div>

                    <div className="project ptwo">
                        <div className="ptwo-media">
                            <img style={{ display: imgDisplay }} src={img2} alt="" />
                            <video style={{ display: vidDisplay }} src={video2} autoPlay loop muted></video>
                        </div>
                        <p>Crypto Price Tracker: Real-Time Cryptocurrency Insights</p>
                    </div>

                    <div className="project pthree">
                        <div className="pthree-media">
                            <img style={{ display: imgDisplay }} src={img3} alt="" />
                            <video style={{ display: vidDisplay }} src={video1} autoPlay loop muted></video>
                        </div>
                        <p>Todo app:write,store,use and delete</p>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Project