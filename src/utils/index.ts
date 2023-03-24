// This script demonstrates access to the NFT API via the Alchemy SDK.
import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
    apiKey: "-Wu369VGLVlWnEt3VXbHLUoJxzkJzwi7", // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };
  
  const alchemy = new Alchemy(settings);
  
  // Print owner's wallet address:
  const ownerAddr = "0xbcFA8eAB1fCe576F1Ef71772E46519e0ADC06623";
  console.log("fetching NFTs for address:", ownerAddr);
  console.log("...");
  
export const getWalletNFTs = async ()=>{

    // Print total NFT count returned in the response:
    const arr : Array<Object> = []
    const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr)
    || [] ;


    nftsForOwner?.ownedNfts.forEach((e:any) => {

        let metaData = e?.rawMetadata
        arr.push({
            name: metaData?.name,
            description: metaData?.description,
            image: metaData?.image,
            isSelected:false
        })
    });
    // console.log("number of NFTs found:", nftsForOwner.totalCount);
    // console.log("...");
    // console.log(arr)

    return arr;

}

