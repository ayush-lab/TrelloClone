import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const loadingButton = ()=> (

    <div style={{textAlign:'center'}}>
    <CircularProgress style={{color:"#9263FF"}} />
    </div>
);

export default loadingButton;