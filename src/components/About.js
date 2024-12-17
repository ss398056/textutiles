import React, { useState } from 'react'


export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color : "black",
    //     background : "white"
    // });

    // const [btnText, setBtnText] = useState("Enable Dark");

    // const toggleStyle = ()=>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color : "black",
    //             background : "white"
    //         });
    //         setBtnText("Enable Dark");
            
    //     }else{
    //         setMyStyle({
    //             color : "white",
    //             background : "grey"
    //         });
    //         setBtnText("Enable Light");
    //     }
    // }
    
    return (
    <>
        <div className="container mt-3 p-3" style={{backgroundColor: props.mode=='dark'?'#444c56':'white', color: props.mode=='dark'?'white':'black'}}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/500" alt="TextileImage" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h2>About Our Textile</h2>
                    <p>
                        We are a leading textile company committed to innovation, sustainability, and quality. Our textiles
                        are crafted using state-of-the-art technology to meet the needs of modern industries and
                        consumers.
                    </p>
                    <p>
                        From traditional to modern designs, we offer a wide range of products that cater to both
                        functionality and aesthetics.
                    </p>
                </div>
            </div>
                {/* <button className='btn btn-primary mt-3' onClick={toggleStyle}>{btnText}</button> */}
        </div>
        
    </>
  )
}
