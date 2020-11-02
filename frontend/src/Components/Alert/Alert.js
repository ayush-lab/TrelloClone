import React from 'react';
import Alert from '@material-ui/lab/Alert';


const Alerts = (props)=> (

    <div >
        <Alert severity={props.type}>{props.text}</Alert>
    </div>
);

export default Alerts;