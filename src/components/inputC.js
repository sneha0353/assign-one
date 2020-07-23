import React ,{useState} from "react"
import data from ".././data.json"
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardText,
    Button,
    InputGroup,
    Input,
    InputGroupAddon,
    Col,
    Row
} from "reactstrap"
import {Link} from "react-router-dom"
import ModalComponent from "./modalC"
const handleChange=e=>{
    e.preventDefault();
    data.languages.map(values=>{
        if(values.name==(e.target.value).toUpperCase())
        {
          document.getElementById("c2").style.display="block";
          document.getElementById("h1").innerHTML=values.name ;     
          document.getElementById("t1").innerHTML=values.description;      
        }
    })
}
 const InputForm=()=>{
     //const [datas,setDatas]=useState("")
     //data.languages.map(values=>setDatas(values.name))
     return (
         <div className="home">
         <ModalComponent/>
        <Row>
        <Col
        sm={{ size: 'auto', offset: 1 }}
        >
       <br/>
        <h1
        style={{
            marginLeft:"50px"
        }}
        >Search for Languages!!</h1>
    <Card body inverse style={{
    backgroundColor:"#00CCCD",
    textAlign:"center",
    marginTop:"50px",
    marginLeft:"50px",
    height:"550px",
    width:"400px",
    border:"5px solid black",
    float:"left"
   }}>
     <CardHeader
     style={{backgroundColor:"#F5BCBA",
     color:"black",
     fontWeight:"bold",
     border:"10px solid #EA7773"
     }}
     >Make A Search Of Top 20 Languages</CardHeader>
     <CardBody>
     <CardText
     style={{fontSize:"25px"}}>
      <ul
      style={{fontSize:"13px",
               listStyle:"none"}}
      >
      {
          data.languages.map((values,index)=>( 
           (index<=2)? 
           <li
           ><b style={{color:"#E74292"}}>{values.name}</b></li> : 
           (index<=5)?
           <li><b style={{color:"indigo"}}>{values.name}</b></li>:
           (index<=8)?
           <li><b style={{color:"blue"}}>{values.name}</b></li>:
           (index<=11)?   
           <li><b style={{color:"green"}}>{values.name}</b></li>:
           (index<=14)?
           <li><b style={{color:"#2B2B52"}}>{values.name}</b></li>:
           (index<=17)?   
           <li><b style={{color:"red"}}>{values.name}</b></li>:
           <li><b style={{color:"#2F363F"}}>{values.name}</b></li>
          ))
    }
      </ul>
     </CardText>
     <InputGroup>
     <Input type="text"
     onChange={handleChange}
     />
     </InputGroup>
     </CardBody>
    </Card>
    </Col>

    <Col 
    id="c2"
    sm={{ size: 'auto', offset: 1 }}
    style={{display:"none"}}
    >
    <Card 
    style={{
        marginTop:"130px",
        marginLeft:"50px",
        width:"400px",
        height:"550px",
        backgroundColor:"#FAD02E",
        textAlign:"center",
        border:"5px solid black"
        }}
    >
    <CardHeader 
    style={{
       paddingBottom:"10px",
       backgroundColor:"#6AB04A",
       fontWeight:"bold"
    }}
    id="h1"/>
    <CardBody 
    >
    <CardText id="t1"/>
     </CardBody>
     </Card>
     </Col>
     </Row>
     </div>
    
     )
    }
 export default InputForm;