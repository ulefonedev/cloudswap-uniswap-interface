import {useRef, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
    root: { 
        color: 'white',
        background: '#69C0FF',
        borderRadius: 3,
        '&:hover': {
          background: '#0f96f7'
        },
      }
  };
  
  const useStyles = makeStyles(styles);

  export const MainButton = ({ confirmSwap, setConfirmSwap }) => { 
    
    const confirmToggle = useRef(false);
    const classes = useStyles();
    
    const swap = () => {
      setConfirmSwap(true) 
      confirmToggle.current = true
      console.log(confirmToggle.current)   
   }

   const excuteSwap = () => {
    setConfirmSwap(false)
   }
   
    return (<div>
      {confirmToggle.current == true ? <Button onClick={excuteSwap} className={classes.root} fullWidth>CONFIRM SWAP
      </Button> : 
      <Button onClick={swap} className={classes.root} fullWidth>SWAP
      </Button>} </div>
    )
  };

export default MainButton
