import { getWalletNFTs } from "@/utils";
import { Card, Input, Switch } from "antd";
import { useEffect, useState } from "react";
import { CHAINS } from "../../contants/chains"
import { CheckOutlined, InfoCircleOutlined } from "@ant-design/icons"
import Button from "../Button/index";
const { Meta } = Card;
export default function NftBoard() {

    const [nftData, setNftData] = useState([]);
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const getNFTData = async () => {
        const nfts: any = await getWalletNFTs();
        setNftData(nfts);

    }
    useEffect(() => {
        getNFTData();

    }, [])

    const selectNft = (nft: any) => {
        console.log('before', nftData);
        let nftList: any = []

        nftData.map((pnft: any) => {
            if (pnft == nft) {
                pnft.isSelected = !pnft.isSelected;
            }
            nftList?.push(pnft)

        });
        setNftData(nftList);
        let isTrue = nftList.some((nft: any) => { return nft.isSelected == true });
        setButtonEnabled(isTrue);
        console.log('NFT', buttonEnabled);


    }

    // console.log("asdas", nftData)
    return (


        <div className="flex justify-center space-x-10 mt-24 ">
            <Card style={{ width: 800, maxHeight: 600, overflow: 'auto', borderRadius: 20 }} bordered={false}>
                <div className="flex  flex-row space-x-5">
                    <div className="font-bold text-lg mt-1">

                        Your NFTs on
                    </div>

                    <div className='h-10 flex w-40 cursor-pointer space-x-4 bg-white shadow border rounded-full hover:bg-gray-200'>
                        <div className='' >
                            <img className='h-8 mt-1 ml-3' src={CHAINS[0].symbol} />
                        </div>
                        <div className='text-lg font-medium mt-1'>
                            {CHAINS[0]?.name}
                        </div>

                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }} className="flex mt-4 space-x-3">

                    {nftData.map((d, i) => {

                        return (<div key={i}>
                            <Card hoverable onClick={() => { selectNft(d) }} cover={<div><span className="absolute top-2 left-2 bg-[#e5e1e1] w-6 h-6 rounded-full"></span>{d?.isSelected == true ? <CheckOutlined className="absolute top-3 left-3" /> : null}<img alt="example" src={d?.image} style={{ height: '150px', width: '100%' }} />

                            </div>
                            }

                                style={{
                                    width: 230,
                                    height: 300,
                                    overflow: "hidden",
                                    marginTop: 10
                                }}

                            >
                                <Meta title={d?.name} description={d?.description}
                                    style={{
                                        width: '100%',
                                        height: 95,
                                        whiteSpace: 'normal'
                                    }} />
                            </Card>
                        </div>)

                    })
                    }


                </div>

            </Card>





            <Card style={{ width: 400, height: 600, borderRadius: 20 }} bordered={false}>

                    <div className="flex flex-row space-x-5 justify-around">
                        <div className="font-bold text-lg mt-1">

                            Destination
                        </div>

                        <div className='h-10 flex w-40 cursor-pointer space-x-4 bg-white shadow border rounded-full hover:bg-gray-200'>
                            <div className='' >
                                <img className='h-8 mt-1 ml-3' src={CHAINS[2].symbol} />
                            </div>
                            <div className='text-lg font-medium mt-1'>
                                {CHAINS[2]?.name}
                            </div>

                        </div>
                    </div>
                    <Input className="mt-2" size="large" placeholder="Paste Destination Address" />
                    <div className="mt-5">
                        <p className="font-bold">Selected NFTs <span className="text-blue-200 ml-5">0/7</span></p>
                        <div className="mt-5 flex justify-between"><p className="font-bold">Approval</p><p><InfoCircleOutlined /></p></div>
                        <div className="mt-5 flex justify-between"><p className="font-bold">Approve Selected NFTs</p><p><Switch defaultChecked /></p></div>
                        <div className="mt-5 flex justify-between"><p className="font-bold">Fees</p><p></p></div>
                    </div>
                    <Button text={'Send'} isEnabled={buttonEnabled} />


                <div >

                </div>




            </Card>


        </div>


    )


}