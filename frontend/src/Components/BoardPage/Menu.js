import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './CSS/Checklist.module.css';


export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu"  className={styles.dropDown} 
      aria-haspopup="true" onClick={handleClick}>
        {props.Menu}
      </Button>
      <Menu
        id="simple-menu"
       
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>{props.option1}</MenuItem>
        <MenuItem onClick={handleClose}>{props.option2}</MenuItem>
        <MenuItem onClick={handleClose}>{props.option3}</MenuItem>
      </Menu>
    </div>
  );
}