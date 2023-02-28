
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainTitle } from './styles'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>João Fernandes - Mobile & front-end</title>
        <meta name="description" content="João P. Assunção - Mobile & front-end developer" />
      </Head>

      <MainTitle>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </MainTitle>

    </div>
  )
}

export default Home
