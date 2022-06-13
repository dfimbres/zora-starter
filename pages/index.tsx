import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

import lastZorbSales from './api/lastZorbSales';
import marketInfo from './api/marketInfo';
import ownerTokens from './api/ownerTokens'

const Home: NextPage = () => {
  const { data: account } = useAccount()
  const [zorbs, setZorbs] = useState({});

  const networkInfo = {
      network: ZDKNetwork.Ethereum,
      chain: ZDKChain.Mainnet,
    }

  const API_ENDPOINT = "https://api.zora.co/graphql";
  const args = { 
                endPoint:API_ENDPOINT, 
                networks:[networkInfo], 
                apiKey: process.env.API_KEY 
              } 
  
  const zdk = new ZDK(args)

  useEffect(() => {
    //  devs4Rev(zdk);
    const fetchData = async () => {
      const zorbData = await lastZorbSales(zdk);
      // const holderNFts = await ownerTokens(zdk, account?.address);
      // const data = await marketInfo(zdk, "0xca21d4228cdcc68d4e23807e5e370c07577dd152");

      setZorbs(zorbData);
      // console.log(holderNFts);
      
    }

    fetchData();
    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
      </Head>

      <main className={styles.main}>
        <ConnectButton accountStatus="address" showBalance={false} />

        <h1 className={styles.title}>
        </h1>

        <p className={styles.description}>
          NFT data DUMP 🙃
        </p>

        <div className={styles.grid}>
            { zorbs?.sales?.nodes.map((item, index) => {
              let { tokenId, name, image } = item.token;
              let { nativePrice, usdcPrice } = item.sale.price;

              return (
                <a key={index + 'a'} href={`https://zorb.dev/nft/${tokenId}`} className={styles.card}>
                <h2 key={index + 'h2'} > {name} &rarr;</h2>
                  <img key={index + 'img'} src={image.url} />
                  <h4 key={index+'ETH'} > {nativePrice.currency.name}: {nativePrice.decimal}</h4>
                  <p key={index+'USDC'} className={styles.price}>USDC: {usdcPrice.decimal.toFixed(2)}</p>
                </a>
              )
            }) }
          

        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

export default Home;
