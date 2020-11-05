import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
import AuthService from '../../../ApiServices/services.js'
//import Login from '../Login/Login';
import '../auth.css';
import Input from '../../Input/Input';
import AuthTemplate from '../../Authentication/Template/Template';
//import SpinnerButton from '../../../components/UI/Spinners/SpinnerButton';
import SumbitButton from '../../Button/SumbitButton';
import Navbar from '../../Navigation/Navbar';
import BoardNav from '../../Navigation/BoardNav';
import LoadingButton from '../../Button/Loading';
import Alerts from '../../Alert/Alert';


class OtpVerify extends Component {

    state = { 
        Form:{
             otp: {

                placeholder: 'Enter your OTP',
                value: "",
                valid: false,
                type: 'number',
                error: " ",
                msg: '',

                // validation: {
                //     required: true,
                //     minLength:6,
          
                // },

                touched: false,
            
        },

    },
    loading:false,
    Signup_token:localStorage.getItem('token'),
    email:localStorage.getItem('email'),
    redirect:null,
    text: "",
    type: "",
   
}


AlertError(alertmsg, alertType) {
    const AlertArray = {...this.state.alert};
    AlertArray.msg = alertmsg;
    AlertArray.valid=true;
    AlertArray.alertType=alertType;
    this.setState({alert:AlertArray});

}

// checkValidity(value,rules){
//     let isValid = true;
//     if(rules.required){
//         isValid =value.trim()!=='' && isValid;
//     }

//     return isValid;
    
//  }


//   runs whenever there is any change in the input field
inputchangeHandler = (event,inputIdentifier)=> {

    const updatedForm = {
        ...this.state.Form
    }
    const updatedElement = {...updatedForm[inputIdentifier]}
 
    updatedElement.value = event.target.value;

    if(updatedElement.value.length>0) 
        updatedElement.touched=true;

    else {updatedElement.touched=false;
          updatedElement.error="";  
    }
    
  

    updatedForm[inputIdentifier] = updatedElement;
    this.setState({Form: updatedForm});

}

// OverallValidity = ()=>{

//     for(let validate in this.state.Form){
//         if(!this.state.Form[validate].valid){
//             return false;
//         }
//     }
//     return true;
// }


formHandler = (event)=> {
    event.preventDefault();
     
  
        this.setState({loading:true});
    
        let formData ={};

        for(let formElement in this.state.Form){
                formData[formElement]=parseInt(this.state.Form[formElement].value);
        }

        formData.email = this.state.email;
       
        
        AuthService.VerifyOtp(formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200) 
          
            { 
             
             this.setState({loading:false})    


             localStorage.removeItem('token') 
             localStorage.removeItem('email')

             localStorage.setItem('access',response.data.access);
             localStorage.setItem('userId',response.data.id);
             localStorage.setItem('userName',response.data.name); 
             this.setState({redirect:'/ResetPassword'})
   
        
            }
           
           })
        
        .catch(error=>{console.log(error.response);
            this.setState({loading:false});
            this.setState({text:error.response.data.detail, type: "error"})

        
        });
       
    }
  



resendotp = ()=>{
    let formData ={};
    formData.token=this.state.Signup_token;
    formData.email=this.state.email;
   
    

    AuthService.otpResend(formData)
        .then(response => {console.log('Response:',response)
        this.setState({text:"Please Check Your Email, Otp has been Re-sent to your Email Address", type:"success"})
      
        if(response.status ===202 || response.status ===200) 
            {localStorage.removeItem('token') 
             localStorage.removeItem('email') 
            }
        else alert("Something went wrong")})

        .catch(error=>{console.log(error); 
            this.setState({loading:false})
            console.log(error.response)
            this.setState({text:error.response.data.detail, type: "error"})

        })
}


    

    render() {
        
        let alert =(<div style={{lineHeight:'3',opacity:'0'}}>a</div>);

        if(this.state.text)
        alert = (<Alerts type={this.state.type} text={this.state.text} />);

        
        

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }

        const formElementsArray =[];
        for(let key in this.state.Form ){
            formElementsArray.push({
                id:key,
                config:this.state.Form[key]
            });

        };

        let SigninSumbitButton= <SumbitButton className={"Sumbit-btn"} 
        Label={"Sumbmit Otp"}/>;
   
        if(this.state.loading){
            SigninSumbitButton= (<LoadingButton />);
      }

        let form = (
          <div className="login-form-otp">
              <button className="google-btn"> 
              <i class="fa fa-google" aria-hidden="true"></i>
              Continue using google</button>
              <p className="devider-or">OR</p>
            <form onSubmit={this.formHandler} >
            
                {
                    formElementsArray.map(x=> (

                      <Input 
                        key={x.id}
                        placeholder={x.config.placeholder}
                        value={x.config.value}
                        type={x.config.type}
                        changed={(event)=> this.inputchangeHandler(event,x.id)}/>

                    ))
                }
                <p className="forgot-password" onClick={this.resendotp}> Resend Otp?</p>
                {SigninSumbitButton}
              <p className="account-login"> Already have an account?  <Link to="/login"> 
              Login</Link></p>
                   
            </form> 
            </div>
        );

        return (
           <>
               <Navbar/>
              {alert}
                
                <div className="SideContent">
                        <AuthTemplate
                        shelp={false}
                        heading1={"Verify Your"}
                        heading2={"Email"}/>

                            {form}
                </div>
        </>
        );
    }
  
}


export default OtpVerify;