import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
import AuthService from '../../../ApiServices/services.js'
//import Login from '../Login/Login';
import '../auth.css';
import Input from '../../Input/Input';
import AuthTemplate from '../../Authentication/Template/Template';
import SumbitButton from '../../Button/SumbitButton';
import Navbar from '../../Navigation/Navbar';
import BoardNav from '../../Navigation/BoardNav';
import LoadingButton from '../../Button/Loading';
import Alerts from '../../Alert/Alert';
//import Alert from '../alert';


class ForgotPassword extends Component {

    state = { 
            Form:{
                
                email: {

                    placeholder: 'Email',
                    value: "",
                    valid: false,
                    type: 'email',
                    error: " ",
                    msg: '',
                    

                    validation: {
                        required: true,
                        regex:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
                       
                    },
                    touched: false,
                
            },

              
        },

        loading:false,
        redirect:null,
        text: "",
        type: "",
        
    }

    



    checkValidity(value,rules){
        let isValid = true;
        const regex=rules.regex;

        if(rules.required){
            isValid =value.trim()!=='' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength  && isValid;
        }
     
        
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength  && isValid;
        }

        if(rules.regex){
            isValid = regex.test(value) && isValid;
        }

        if(rules.match){
            isValid = value === (this.state.Form['password'].value) && isValid;
        }

        return isValid;
        
     }


//   runs whenever there is any change in the input field
inputchangeHandler = (event,inputIdentifier)=> {
    const updatedForm = {
        ...this.state.Form
    }
    const updatedElement = {...updatedForm[inputIdentifier]}
    

    updatedElement.value = event.target.value;
    if(inputIdentifier === 'profile'){
        updatedElement.name.value =event.target.value;
    }

    updatedForm[inputIdentifier] = updatedElement;
    this.setState({Form: updatedForm});


    updatedElement.valid = this.checkValidity(updatedElement.value,
        updatedElement.validation);

}

inputBlurHandler = (event,inputIdentifier)=> {
    const updatedForm = {
        ...this.state.Form
    }
    const updatedElement = {...updatedForm[inputIdentifier]}
    

    if(updatedElement.value.length>0) 
        updatedElement.touched=true;

    else {updatedElement.touched=false;
          updatedElement.error="";  
    }
    

    // msg errors for email
    if(inputIdentifier === "email" && !updatedElement.valid){
        updatedElement.error = "Invalid format";
        updatedElement.msg="";
    }
    if(inputIdentifier === "email" && updatedElement.valid){
        updatedElement.error="";
        updatedElement.msg="valid";
    }

    updatedForm[inputIdentifier] = updatedElement;
    this.setState({Form: updatedForm});

}
   
    OverallValidity = ()=>{

        for(let validate in this.state.Form){
            if(!this.state.Form[validate].valid){
                return false;
            }
        }
        return true;
    }

    timeout = ()=> {
        let temp ={...this.state.alert}
        temp.msg=''
        temp.alertType=''
    
         this.setState({alert:temp,alertPressed:false}) 
         
    }
    



    formHandler = (event)=> {
        event.preventDefault();
      //  this.setState({alertPressed:true})
     //   setTimeout(this.timeout , 3000);
         
        if(this.OverallValidity()){
            this.setState({loading:true});
           
         
            const formData ={};
            for(let formElement in this.state.Form){
                    formData[formElement]=this.state.Form[formElement].value;
                   
            }
      


            
            AuthService.VerifyEmail(formData) 
            .then(response => {console.log('Response:', response)

                if(response.status ===201 || response.status ===200){
                     
                     localStorage.setItem("email",this.state.Form.email.value);
                     localStorage.setItem("type","success");
                     localStorage.setItem("msg",response.data.message);
                     
                     this.setState({ redirect: "/OtpVerify" });
                   
                }
                 

                })
                  //  alert("Something went wrong")})

            .catch(error=>{;
                 this.setState({loading:false})
                 console.log(error.response);
                 if(error.response.request.status === 308){

                    this.setState({ redirect: "/signup/otp" });

                 }
                 if(error.response.data.detail === 'OTP was sent less than a minute ago.'){
                    this.setState({text:error.response.data.detail + "Please try again after 1 min", type: "error"})
                 }
                 else 
                    this.setState({text:error.response.data.detail, type: "error"})
                } );
            
            
        

        }
        
        else{ 
        
            this.setState({text:"Make sure the validations are correct", type: "warning"})

        }

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

        let SigninSumbitButton= <SumbitButton className={"Sumbit-btn"} Label={"Submit email"}/>;
   
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
                        invalid={!x.config.valid}
                        touched={x.config.touched}
                        errors={x.config.error}
                        msg={x.config.msg}
                        blur={(event)=> this.inputBlurHandler(event,x.id)}
                        changed={(event)=> this.inputchangeHandler(event,x.id)}/>

                    ))
                }
               
                {SigninSumbitButton}
              <p className="account-login"> Already have an account? 
               <Link to="/login"> Login</Link></p>
               
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
                        heading1={"Enter your"}
                        heading2={"Email"}/>

                            {form}
                </div>
        </>
        );
    }
  
}


export default ForgotPassword;