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

  export const MainButton = () => {    
    const classes = useStyles();
    return <Button className={classes.root} fullWidth>ENTER AN AMOUNT
    </Button>;
  };

export default MainButton
