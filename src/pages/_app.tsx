import '../styles/globals.css';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import Avatar from '@/components/materials/Avatar';
import Button from '@/components/materials/Button';
import Icon from '@/components/materials/Icon';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='h-screen w-screen bg-black'>
      <Icon icon='home'></Icon>
      123
    </div>
  )
}

export default App;
