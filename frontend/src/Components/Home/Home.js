import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsynBoards} from '../../actions';
import styles from './CSS/home.module.css';
import Navbar from '../Navigation/Navbar';
import HomeSideNav from './HomeSideNav';
import HomeCards from './HomeCards';
import AddTeam from '../Team/addTeam';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';

class Home extends Component{

    componentDidMount(){
            this.props.Boards();
        }

    render(){

        let {Home} = this.props;
        console.log(Home);
        

        let personal_boards=null;
        let starred_boards=null;
        let team_boards=null;


        if(Home!==null){
            
            personal_boards=Home.Boards.personal_boards
            .map(board=> (
                <HomeCards
                key={board.id}
                BoardId={board.id}
                Title={board.name}
                />
            ));

            starred_boards=Home.Boards.starred_boards
            .map(board=> (
                <HomeCards 
                key={board.id}
                BoardId={board.id}
                Title={board.name}/>
            ));

            team_boards=Home.Boards.team_baords
            .map(board=> (
                <HomeCards
                key={board.id}
                BoardId={board.id}
                Title={board.name}/>
            ));
        }
           


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
                                
                                {starred_boards}
                                
                                <AddTeam/>
                              
                            </div>
                       </div>


                       <div className={styles.BoardSection}>
                        <div className={styles.BoardSectionName}>

                                <div><PersonIcon className={styles.PersonIcon}/></div>
                                <span className={styles.BoardType}> Personal Boards </span>
                                        
                            </div>


                             <div className={styles.HomeBoardComponent}>   
                                {personal_boards}
                            </div>
                       </div>


                <div className={styles.BoardSection}>
                   <div className={styles.BoardSectionName}>

                                <div><PeopleIcon className={styles.PeopleIcon}/></div>
                                <span className={styles.BoardType}> Team Boards </span>
                                        
                            </div>


                             <div className={styles.HomeBoardComponent}>   
                                {team_boards}

                            </div>
                       
                        </div>
                    </div>  

            </div>


            </>
        );
    }

} 


const mapStateToProps = state => ({
    Home:state.Home,
    
})

const mapDispatchToProps =dispatch => {
  
    return {
       Boards: ()=> dispatch(AsynBoards()),
           }


    } 

export default connect(mapStateToProps,mapDispatchToProps)(Home);