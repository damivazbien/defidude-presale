import web3 from '../utils/web3';

const CONTRACT_ADDRESS = '0x3eCa2e0BD73a830CB2Aa45f9e1B2fc988A0b36D5';

const CONTRACT_ABI = [
   {
      "inputs":[
         {
            "internalType":"uint256",
            "name":"rate",
            "type":"uint256"
         },
         {
            "internalType":"address payable",
            "name":"wallet",
            "type":"address"
         },
         {
            "internalType":"contract IERC20",
            "name":"token",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"openingTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"closingTime",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"cap",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"individualCap",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"CapperAdded",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"CapperRemoved",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"prevClosingTime",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"newClosingTime",
            "type":"uint256"
         }
      ],
      "name":"TimedCrowdsaleExtended",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"purchaser",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"beneficiary",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"value",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amount",
            "type":"uint256"
         }
      ],
      "name":"TokensPurchased",
      "type":"event"
   },
   {
      "payable":true,
      "stateMutability":"payable",
      "type":"fallback"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"addCapper",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"beneficiary",
            "type":"address"
         }
      ],
      "name":"buyTokens",
      "outputs":[
         
      ],
      "payable":true,
      "stateMutability":"payable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"cap",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"capReached",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"closingTime",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"beneficiary",
            "type":"address"
         }
      ],
      "name":"getCap",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"beneficiary",
            "type":"address"
         }
      ],
      "name":"getContribution",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"hasClosed",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"account",
            "type":"address"
         }
      ],
      "name":"isCapper",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"isOpen",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"openingTime",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"rate",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"renounceCapper",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"beneficiary",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"cap",
            "type":"uint256"
         }
      ],
      "name":"setCap",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"token",
      "outputs":[
         {
            "internalType":"contract IERC20",
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"wallet",
      "outputs":[
         {
            "internalType":"address payable",
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"weiRaised",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   }
]

 export default new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);