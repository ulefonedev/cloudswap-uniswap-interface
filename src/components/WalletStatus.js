
const WalletStatus = ({ userBalance, userAddress }) => {
    return (
        <div>
        {userBalance ? <div>{userBalance}{userAddress}</div> : <div>Connect Wallet</div>}
        </div>
    )
}

export default WalletStatus
