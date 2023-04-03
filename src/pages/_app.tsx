import '../styles/globals.css';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import Avatar from '@/components/materials/Avatar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='h-screen w-screen'>
      <Avatar src="/avatar.svg" borderColor='green-200' width={100} borderWidth={4}></Avatar>
      <Layout>
        <Layout.Header></Layout.Header>
        <Layout.Main></Layout.Main>
        <Layout.Sidebar></Layout.Sidebar>
        <Layout.Footer></Layout.Footer>
      </Layout>
    </div>
  )
}

export default App;
