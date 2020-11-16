import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor:"#3A88A9",
  },
});

export default function LinearDeterminate(props) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={props.progress} />
    </div>
  );
}