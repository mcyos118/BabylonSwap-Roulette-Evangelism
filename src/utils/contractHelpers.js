import web3NoAccount from './web3'
import yfEthAbi from './yfethAbi.json';
import RouletteAbi from './roulette.json'
import EvangelismAbi from './evangelism.json'
import MiningBankAbi from './miningBank.json'

const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount;
    // console.log('_web3',_web3);
    return new _web3.eth.Contract(abi, address)
}

export const getBep20Contract = (address, web3) => {
    return getContract(yfEthAbi, address, web3)
}

export const RouletteContract = (address, web3) => {
    return getContract(RouletteAbi, address, web3)
}

export const Evangelism = (address, web3) => {
    return getContract(EvangelismAbi, address, web3)
}

export const MiningBankContract = (address, web3) => {
    return getContract(MiningBankAbi, address, web3)
}
