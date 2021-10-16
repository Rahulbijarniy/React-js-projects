import React, {useState} from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    width: '100%',
    height: '60px',
    fontSize: '20px',
    textAlign:'left'
  }

  
    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3" style={{color: props.mode ==='white'?'rgb(36 74 104)':'dark', textAlign: 'center'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your text
        </button>
    </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Text Inspector is the professional web tool for analysing texts. Analyse and Score Writing (student writing), Reading and Listening texts.

      </div>
    </div>
  </div>
       <div className="accordion-item">
    <h2  h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Free to use
       </button>
    </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
         Let's take an example which I usually see in the projects, it's a simple example like we all do, the string null check and empty check.
           </div>
         </div>
       </div>
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatible
        </button>
      </h2>
       <div id="collapseThree" className="accordion-collapse collapse"     aria-labelledby="headingThree" data-bs-parent="#accordionExample">
       <div className="accordion-body" style={myStyle}>
       Browser compatibility means that your website can be 'translated' effectively via a particular browser or operating system, such that it can be accessed by and is fully functional for a user. A site may behave perfectly in one browser but still have issues and errors in others.
      </div>
    </div>
  </div>
</div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">Enable Light Mode</button>

      </div> */}
</div>
    )
}
