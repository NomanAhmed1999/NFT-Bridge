
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Layout from '@/components/Layout';
import Gallery from '@/components/Gallery';
import ChainModal from '@/components/ChainModal';


export default function Home() {
  return (

    <Layout>
<Gallery/>
<ChainModal/>
    </Layout>

  )
}
