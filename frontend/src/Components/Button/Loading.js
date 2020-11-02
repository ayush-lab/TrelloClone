import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const loadingButton = ()=> (

    <div style={{textAlign:'center'}}>
    <CircularProgress style={{color:"#89609E"}} />
    </div>
);

export default loadingButton;