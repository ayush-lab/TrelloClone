import React,{Component} from 'react';
import styles from './CSS/home.module.css';
import GroupIcon from '@material-ui/icons/Group';
import {NavLink} from 'react-router-dom';

class ListTeam extends Component{

    render(){



        return(
            <div className={styles.BoardNav}>
                    
                <div className={styles.BoardNavIcon}><GroupIcon fontSize="small"/></div>
                    <span className={styles.BoardCategoryName}>
                      {this.props.name}</span>
            
                </div>

        )
    }

}

export default ListTeam;