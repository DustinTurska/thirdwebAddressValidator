## Address Validator

A useful tool for checking a list of wallet addresses before an airdrop. This tool takes in a list of addresses and returns bad and contract addresses that should be removed from the list. 

```bash
git clone https://github.com/dturska12/thirdwebAddressValidator.git
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work. Update `activeChain` to your network of choice.

### Deploy AddressValidator.sol

```bash
npx thirdweb deploy
```

*AddressValidator.sol is chain specific, you must deploy the contract on the chain you wish to use it on.*

https://thirdweb.com/kronickatz.eth/ContractAddressChecker/1.0.0

### Update addresses.ts

Once the contract is deployed, update the contract address in `const/addresses.ts`

### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
