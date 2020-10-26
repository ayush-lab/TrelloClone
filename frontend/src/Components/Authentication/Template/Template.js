import React from 'react';
import './Template.css';



const authTemplate = (props)=> {

    let shelp = null;

    if(props.shelp){
            
            shelp = (<>
                        <br/><span className="heading-3">F</span>
                        <span className="heading-4">low</span>
                    </>); 

                  }


        return(

            <>
                <h1 className="Content-text"><span className="heading-1">{props.heading1}</span> 
                <br/><span className="heading-2">{props.heading2}</span>

               {shelp} 

                <div className="MainPageback">
             
                     {/* <img className="circle1" src={circle} alt="circle2"/>  */}
                </div>
            
               </h1>
            </>

        );
    
}

export default authTemplate;