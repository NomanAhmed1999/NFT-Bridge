
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import ChainModal from '@/components/ChainModal';
import NftBoard from '@/components/NftBoard';


export default function Bridge() {
  return (

    <Layout>
    <NftBoard/>
    </Layout>

  )
}
