# Getting Started 

This project is running [Here](https://defidude-presale.surge.sh/).

## Smart contracts running on Ethereum Rinkeby

This is the relevant suite of contracts for token launch deployed to Rinkeby

LGE: https://rinkeby.etherscan.io/address/0x3eca2e0bd73a830cb2aa45f9e1b2fc988a0b36d5#readContract

500,000,000 sLP for sale @ 50,000,000 / 1 ETH. Total cap of 10 ETH. 

LGE Countdown Timer Test: https://rinkeby.etherscan.io/address/0x8f9ecbf7051a328d28144123147d6ea200708c8e#code

Synthetic LP Token: https://rinkeby.etherscan.io/address/0xb7730cccb870090e026ced28523a34650102e369

Sample output LP Token: https://rinkeby.etherscan.io/address/0xc606d63427b0e4956dec61f107c20f6fff0178f0#code

Token Swap Contract: https://rinkeby.etherscan.io/address/0x34dcacdbbe6f0db178b29c47d06494f0dc8250ad#code

## Token Swap Notes

Tax rate decays at dailyTaxRate according to daysPassed
Contract admin can change the start date to some day in the past to test how the tax changes each day using changeStartTime()

To run through the tests yourself:
Purchase() tokens from LGE contract
Approve the received SLP token to the Swap Contract
swapTokens() from LGE contract to receive the dummy output token
