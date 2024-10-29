import React from 'react'
export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white',
    // })

    let myStyle={
        color:props.mode==='dark'?'white':'#041c40',
        backgroundColor:props.mode==='dark'?'#07146c':'white',
        // border: '2px solid white',
    }

    // const [buttontxt, setbuttontxt] = useState('Enable Dark Mode')

    // const change_mode=()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setbuttontxt('Enable Light Mode')
    //     }else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //         })
    //         setbuttontxt('Enable Dark Mode')

    //     }
    // }

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#041c40'}}>
        <h2>About Us</h2>
            <div>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Analyze your Text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TEXTO gives you a way to analyze your text quickly and efficiently. Be it worf count, character count or Time to read the text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to Use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                TEXTO is a free character counter tool that provides instant character count & word count statistics for a give text. Texto reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf doument, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
            <button className="btn btn-primary my-3" onClick={change_mode}>{buttontxt}</button>
            </div> */}
        </div>
        </>
    )
}
