import React from "react"
import {Jumbotron} from "reactstrap"
const About=()=>{
 return (
     <div>
     <Jumbotron style={{marginTop:"100px",
                        border:" 10px solid black",
                        backgroundColor:"#F9DDA4"
    }}>
     <h1 className="display-3">Hello,this is Sneha</h1>
     <p className="lead">I am doing my B.Tech degree from 
     Acharya Institute Of Technology,presently in 3rd year
     </p>
     <hr className="my-2"/>
     <p className="lead">
     I have a keen interest in web development and want to enrich my knowledge more
     </p>
     <h2>My Skills:</h2>
     <ul style={{listStyle:"none"}}>
    <li>Javascript</li> 
    <li>HTML,CSS,Bootstrap</li> 
    <li>ReactJS</li> 
    <li>NodeJS</li> 
     </ul>
     </Jumbotron>
     </div>
 )
}
export default About;
