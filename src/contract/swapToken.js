import web3 from '../utils/web3';

//Swap contract
const CONTRACT_ADDRESS = "0x63B7FCA6147E293A8e5d91ed59931614DC961362";

const CONTRACT_ABI = [
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_tokenFrom",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"_tokenTo",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"_tokenFromTotal",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"_tokenToTotal",
            "type":"uint256"
         },
         {
            "internalType":"address",
            "name":"_taxReceiver",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"taxOffsetDays",
            "type":"uint256"
         }
      ],
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"previousOwner",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"OwnershipTransferred",
      "type":"event"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_amount",
            "type":"uint256"
         }
      ],
      "name":"calculateTokens",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_newStart",
            "type":"uint256"
         }
      ],
      "name":"changeStartTime",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"dailyTaxRate",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"daysRunning",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"initiateSwap",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"isInitiated",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"isTaxEnabled",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"owner",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"renounceOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"bool",
            "name":"_newState",
            "type":"bool"
         }
      ],
      "name":"setTaxEnabled",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"_amount",
            "type":"uint256"
         }
      ],
      "name":"swapTokens",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "name":"swapUsers",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "name":"swappedAmount",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"taxPeriod",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"taxRate",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"taxReceiver",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"taxStart",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"tokenFrom",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"tokenFromTotal",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"tokenTo",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         
      ],
      "name":"tokenToTotal",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "stateMutability":"view",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"transferOwnership",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "inputs":[
         {
            "internalType":"address",
            "name":"_token",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"_to",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"_amount",
            "type":"uint256"
         }
      ],
      "name":"withdrawTokens",
      "outputs":[
         
      ],
      "stateMutability":"nonpayable",
      "type":"function"
   }
];

 export default new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);