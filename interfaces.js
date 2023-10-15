// Import the necessary libraries (e.g., Web3.js)

// Connect to the Ethereum network
const web3 = new Web3(Web3.givenProvider);

// Function to get the balance of an Ethereum address
async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    throw error;
  }
}

// Function to get the token name
async function getTokenName(tokenAddress) {
  try {
    const tokenContract = new web3.eth.Contract(TokenABI, tokenAddress);
    const name = await tokenContract.methods.name().call();
    return name;
  } catch (error) {
    throw error;
  }
}

// Function to get the token symbol
async function getTokenSymbol(tokenAddress) {
  try {
    const tokenContract = new web3.eth.Contract(TokenABI, tokenAddress);
    const symbol = await tokenContract.methods.symbol().call();
    return symbol;
  } catch (error) {
    throw error;
  }
}

// Export the required functions
module.exports = {
  getBalance,
  getTokenName,
  getTokenSymbol,
};
