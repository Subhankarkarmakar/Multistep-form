import React, {useState} from "react";
import SignUpinfo from './SignUpinfo';
import Personalinfo from './PersonalIinfo';
import Otherinfo from './Otherinfo';

function Form(){
    const[page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password:"",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });
    const FormTitle = ["Sign Up", "Personal Info", "Other"];
    const PageDisplay = () =>{
        if(page == 0){
            return <SignUpinfo formData={formData} setFormData={setFormData}/>;
        }
        else if(page == 1){
            return <Personalinfo formData={formData} setFormData={setFormData}/>;
        }
        else{
            return <Otherinfo formData={formData} setFormData={setFormData}/>;
        }
    };

 return(
    <div className="form">
        <div className="progressbar">
            <div style={{width: page == 0? "33.3%" : page ==1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="header">
                <h1>{FormTitle[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
                <button
                      disabled ={page == 0}
                      onClick={() => {setPage((currPage) => currPage - 1);
                      }}
                >Prev</button>
                <button 
                disabled ={page == FormTitle.length -1}
                onClick={() => {setPage((currPage) => currPage + 1);
                }}
                >Next
                </button>
            </div>
        </div>
    </div>
 )
}
export default Form