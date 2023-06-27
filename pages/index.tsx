import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { CONTRACT_ADDRESS } from "../const/addresses"

export default function Component() {
  const [addressList, setAddressList] = useState<string[]>([]);
  const [contractAddresses, setContractAddresses] = useState<string[]>([]);

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const inputAddresses = event.target.value.split("\n");
    setAddressList(inputAddresses);
  };

  const handleButtonClick = async (contract: any) => {
    const addresses = await contract.call("getContractAddresses", [addressList]);
    setContractAddresses(addresses);
  };

  const onSuccessMessage = contractAddresses.length > 0 && (
    <div className={styles.successMessage}>
      Please remove the following addresses:
      <ul>
        {contractAddresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>Address validator</h5>
        <div className={styles.description}>
          <h6>Verify that your list contains only wallet addresses</h6>
        </div>
      </div>
      <textarea
        className={styles.textarea}
        placeholder="Enter addresses (one per line)"
        onChange={handleInputChange}
        rows={5}
        cols={30}
      />
      <Web3Button
        contractAddress={CONTRACT_ADDRESS}
        action={handleButtonClick}
        className={styles.button}
      >
        Check Addresses
      </Web3Button>
      {onSuccessMessage}
    </div>
  );
}
