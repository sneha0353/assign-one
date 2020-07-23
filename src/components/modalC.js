import React,{useState} from "react"
import {Button,
        Modal,
        ModalHeader,
        ModalBody,
        } from "reactstrap"
import {FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
const ModalComponent=()=>{
    
    const[modal,setModal]=useState(false);
    const toggle=()=>setModal(!modal);
    return (
        <div
        style={{
            marginLeft:"200px"
        }}
        >
        <Link to="/about-me">
        <Button
        style={{backgroundColor:"green" ,
             width:"150px",
             border:"5px solid black",
             marginRight:"15px",
             marginTop:"50px" }}
        >
        Check me!!
        </Button>
        </Link>
        <Button 
      style={{backgroundColor:"#EA425C" ,
             width:"150px",
             border:"5px solid black",
             marginTop:"50px"
            }}
      onClick={toggle}>
          Open me!        
      </Button>
        <Modal isOpen={modal} toggle={toggle} 
        >
        <ModalHeader toggle={toggle}
        >
        <FaTimes className="icons"/>
        SNEHA
        </ModalHeader>
        <ModalBody>
          Hello users!This is Sneha!!!
        </ModalBody>
        </Modal>

        </div>
    )
}
export default ModalComponent;