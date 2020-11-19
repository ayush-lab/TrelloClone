import React, {Component} from 'react';
import styles from './CSS/TeamHome.module.css';
import Members from './Members';
import Navbar from '../Navigation/Navbar';
import HomeCards from '../Home/HomeCards';
import Profile from './TeamProfile';
import AddTeam from './addTeam';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import PeopleIcon from '@material-ui/icons/People';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AuthService from '../../ApiServices/services';

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}>

            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

                     

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

 
export default function Team(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    

    const [TeamId,SetTeamId]=React.useState(props.match.params.teamId);
    const [Team,setTeam]=React.useState(null);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };


    React.useEffect( ()=>{

      AuthService.ViewTeamDetails(TeamId)
      .then(response => {console.log('Response:', response) 

      if(response.status ===201 || response.status ===200 || response.status ===202) 
        
          { 
             
             setTeam(response.data)
      
          }
         
      else if(response.status===401) alert("Something went wrong")})
      
      .catch(error=>{console.log(error.response); 
          // if(error.response.request.statusText ==="Unauthorized"){
          //     dispatch(Error("/login"));
          // }
          //this.setState({loading:false});
      //this.setState({text:error.response.data.detail, type: "error"})

      
      
      })

    }, []);

    let teamDesc = null;
    let teamName=null;
    let teamBoard=null;
    //et teamMembers=null;

    if(Team!==null){
      teamName=Team.team.name;
      teamDesc=Team.team.desc;
      
      teamBoard = (Team.boards.map(board=>
            (<HomeCards
                key={board.id}
                BoardId={board.id}
                Title={board.name}
                star={board.starred}/>)));


    }




 

        return(
            <>
                <Navbar/>

                <Profile name={teamName} desc={teamDesc}/>

                
    <div className={styles.tabs}>
      <AppBar position="static" className={styles.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="primary"
          aria-label="full width tabs example"
          classes={{
            indicator:styles.Indicator,
            
        }}
        >
          <Tab label="Boards" {...a11yProps(0)} />
          <Tab label="Members" {...a11yProps(1)} />
          <Tab label="Setting" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          
          <div className={styles.HomeCards}>
            {teamBoard}
            <AddTeam/>
          </div>
            
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>


            <Members users={Team}/>


        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>

      </SwipeableViews>
    </div>
                


            </>
        );
    

} 
