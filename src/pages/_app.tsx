import '../styles/globals.css';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import Avatar from '@/components/materials/Avatar';
import Button from '@/components/materials/Button';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='h-screen w-screen'>
      <div className='p-4'>
        <Button text="Tweet" color='green' size='large' clickHandler={() => { window.alert(123) }} />
      </div>
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
