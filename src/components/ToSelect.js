import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { form } from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import { shadows } from '@material-ui/system'

const useStyles = makeStyles({
   btn: {
    borderRadius: 10,
    width: '97px',
    height: '36px' 
   }
  });
  
  export const ToSelect = () => { 

    const classes = useStyles();
    const [token, setToken] = useState('');
    const handleChange = (event) => {
        setToken(event.target.value);
      };

    return (
        <Box className={classes.btn} boxShadow={6}>
        <Button className={classes.btb} boxShadow={6} disableRipple={true}>ETH
        <Select 
          labelId="simple-select-outlined-label"
          id="simple-select-outlined"
          onChange={handleChange}
          value={"sd"}
          label="FROM"
          style={{minWidth: 35}}
          disableUnderline>
          <MenuItem value={10}>Token 1</MenuItem>
          <MenuItem value={20}>Token 2</MenuItem>
          <MenuItem value={30}>Token 3</MenuItem>
        </Select>  
        </Button>
        </Box>
    )
  }

  export default ToSelect