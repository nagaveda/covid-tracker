import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

import styles from './CreditComponent.module.css';
const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  }));
export  function TypographyTheme() {
    const classes = useStyles();
  
    return <div className={classes.root}>{"This Covid Tracker Project is developed by Nagaveda using React, Hooks, Material UI, React chartjs and a Data API..!"}</div>;
  }
const Credit = () =>{
    return(
        <div className={styles.container}>
            
            <TypographyTheme/>
            <div className={styles.link} >  
            <a  target="_blank" href="https://www.google.com"><FontAwesomeIcon icon={faCodeBranch} /> Fork the project on Github</a>
            </div>
        </div>
    );
}

export default Credit;






