import React, {Component} from 'react';
import styles from './CSS/home.module.css';
import Navbar from '../Navigation/Navbar';
import HomeSideNav from './HomeSideNav';
import HomeCards from './HomeCards';
import AddTeam from '../Team/addTeam';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';

class Home extends Component{

    render(){

        return(
            <>
                <Navbar/>

                <div className={styles.main}>

                     <div className={styles.section1}>
                            <HomeSideNav/>
                            
                    </div>   

                     <div className={styles.section2}>

                       <div className={styles.BoardSection}>
                            <div className={styles.BoardSectionName}>

                                <div><StarRoundedIcon className={styles.star}/></div>
                                <span className={styles.BoardType}> Favorite Boards </span>
                                        
                            </div>


                             <div className={styles.HomeBoardComponent}>   
                                <HomeCards/>

                                <HomeCards/>

                                <HomeCards/>
                                
                                <AddTeam/>
                              
                            </div>
                       </div>


                       <div className={styles.BoardSection}>
                        <div className={styles.BoardSectionName}>

                                <div><PersonIcon className={styles.PersonIcon}/></div>
                                <span className={styles.BoardType}> Personal Boards </span>
                                        
                            </div>


                             <div className={styles.HomeBoardComponent}>   
                                <HomeCards/>

                                <HomeCards/>
                            </div>
                       </div>


                <div className={styles.BoardSection}>
                   <div className={styles.BoardSectionName}>

                                <div><PeopleIcon className={styles.PeopleIcon}/></div>
                                <span className={styles.BoardType}> Team Boards </span>
                                        
                            </div>


                             <div className={styles.HomeBoardComponent}>   
                                <HomeCards/>

                            </div>
                       
                        </div>
                    </div>  

            </div>


            </>
        );
    }

} 

export default Home;