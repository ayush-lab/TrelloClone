import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './visibility.module.css';


const Visibility = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [value,changeValue]=useState('Visibility');

  function handleSelect(caption,value){
    changeValue(caption)
    console.log(caption,value)
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} className={styles.dropdown} toggle={toggle}>
      <DropdownToggle  className={styles.dropdown} caret>
        {value}
        </DropdownToggle>
      <DropdownMenu >
       
        <DropdownItem onClick={()=> {handleSelect("Private","1")} }>Private</DropdownItem>
        <DropdownItem onClick={()=> {handleSelect("Team","2")} }>Team</DropdownItem>
        <DropdownItem onClick={()=> {handleSelect("Public","3")} }>Public</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}

export default Visibility;