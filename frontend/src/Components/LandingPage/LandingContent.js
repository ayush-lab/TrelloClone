import React, {Component} from 'react';
import styles from './CSS/LandingContent.module.css';

class LandingContent extends Component{

    render(){


        return(     
        <div className={styles.main2Text}>

         <div className={styles.Content_items_text}>

                <div className={styles.Content_bold}>
                  {this.props.heading}
                </div>

                <div className={styles.Content_light}>
                Whether it’s for work, a side project or even<br/>
                 the next family vacation, Flow helps your <br/>team stay organized
                </div>

                <button className={styles.signButton}>Sign up for free   &nbsp; <i className="fa fa-long-arrow-right" aria-hidden="true"></i> </button>

        </div>
        </div>


        );
    }

}
export default LandingContent;
