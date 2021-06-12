import { ethers } from 'ethers'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import WalletStatus from './WalletStatus'

//uniswaprouter address
const contractAddress= '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

const styles = {
    root: {
      background: "#E6F7FF",
      borderRadius: 3,
      width: 207,
      height: 40,
      "&:hover": {
        background: "#E6F7FF"
      }
    }
  };
  
  const useStyles = makeStyles(styles);

const ConnectButton = ({ userBalance, setUserBalance, userAddress, setUserAddress }) => {

  const classes = useStyles();

  const updateUI = () => {

  }
  
  const getWalletInfo = async (signer, provider) => {
    const address = await signer.getAddress();
    const bigBalance = await provider.getBalance(address)
    const balance = ethers.utils.formatUnits(bigBalance._hex)
    setUserBalance(balance);
    setUserAddress(address);
}

  const requestAccount = async () => {
  return window.ethereum.request({ method: 'eth_requestAccounts',});  
}

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {      
      await requestAccount().then( () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        getWalletInfo(signer, provider);
      })          
    }
  }
    
    return <Button className={classes.root} onClick={connectWallet}>
    <WalletStatus userBalance={userBalance} userAddress={userAddress}/></Button>;
  };

export default ConnectButton