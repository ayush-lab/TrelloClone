import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsynBoards} from '../../actions';
import {Redirect} from 'react-router-dom';
import styles from './CSS/home.module.css';
import Navbar from '../Navigation/Navbar';
import HomeSideNav from './HomeSideNav';
import HomeCards from './HomeCards';
import AddTeam from '../Team/addTeam';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import TeamCards from './TeamCards';


class Home extends Component{

    componentDidMount(){
            this.props.Boards();
        }

    render(){

        const {Home,Team} = this.props;
        console.log(Team);
        

        let personal_boards=null;
        let starred_boards=null;
        let team_boards=null;
        let Team_section = null;

        if(Team!==null){
            Team_section = Team.Team.map(board=>{
                return (
                    <TeamCards 
                      key={board.id}
                      id={board.id}
                      name={board.name}
                      members={board.members}
                    />
                )
            })
        }
        

        if(Home!==null){
            
            if(Home.redirect){
                return <Redirect to={Home.redirect}/>
            }
            personal_boards=Home.Boards.personal_boards
            .map(board=> (
                <HomeCards
                key={board.id}
                BoardId={board.id}
                Title={board.name}
                star={board.starred}
                />
            ));

            starred_boards=Home.Boards.starred_boards
            .map(board=> (
                <HomeCards 
                key={board.id}
                BoardId={board.id}
                Title={board.name}
                star={board.starred}/>
            ));

            team_boards=Home.Boards.team_baords
            .map(board=> (
                <HomeCards
                key={board.id}
                BoardId={board.id}
                Title={board.name}
                star={board.starred}/>
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
                                
                            </div>
                       </div>


                       <div className={styles.BoardSection}>
                            <div className={styles.BoardSectionName}>

                                <div><PersonIcon className={styles.PersonIcon}/></div>
                                <span className={styles.BoardType}> Personal Boards </span>
                                        
                            </div>


                             <div className={styles.HomeBoardComponent}>   
                                {personal_boards}
                                <AddTeam/>
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


                {Team_section}


                


                
                </div>  



                    

            </div>


            </>
        );
    }

} 


const mapStateToProps = state => ({
    Home:state.Home,
    Team:state.Team,
    
})

const mapDispatchToProps =dispatch => {
  
    return {
       Boards: ()=> dispatch(AsynBoards()),
           }


    } 

export default connect(mapStateToProps,mapDispatchToProps)(Home);