import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './visibility.module.css';
import {connect} from 'react-redux';
import {AsynPermission} from '../../actions';

const Visibility = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value,changeValue]=useState('Private');

  function handleSelect(caption,value){
    changeValue(caption)
    let formData = {};
    formData['permission_level']=value;

    props.Permission(props.boardId,formData)
    
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} className={styles.dropdown} toggle={toggle}>
      <DropdownToggle  className={styles.dropdown} caret>
        {value}
        </DropdownToggle>
      <DropdownMenu >
       
        <DropdownItem onClick={()=> {handleSelect("Private","3")} }>Private</DropdownItem>
        <DropdownItem onClick={()=> {handleSelect("Team","4")} }>Team</DropdownItem>
        <DropdownItem onClick={()=> {handleSelect("Public","5")} }>Public</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}



const mapStateToProps = state => ({
    
})

const mapDispatchToProps =dispatch => {
  
    return {
        
        Permission: (BoardId,form)=> dispatch(AsynPermission(BoardId,form)),
        
           }


    } 


export default connect(mapStateToProps,mapDispatchToProps)(Visibility);
