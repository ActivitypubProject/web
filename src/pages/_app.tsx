import '../styles/globals.css';
import Layout from '@/components/layout';
import type { AppProps } from 'next/app';
import Avatar from '@/components/materials/Avatar';
import Button from '@/components/materials/Button';
import Icon from '@/components/materials/Icon';
import SidebarItem from '@/components/materials/SidebarItem';
import Searcher from '@/components/materials/Searcher';

const App = ({ Component, pageProps }: AppProps) => {
  const items = [
    {
      icon: 'home',
      text: 'Home',
      clickHandler: () => { }
    },
    {
      icon: 'local',
      text: 'local',
      clickHandler: () => { }
    },
    {
      icon: 'global',
      text: 'global',
      clickHandler: () => { }
    }
  ]
  return (
    <div className='h-screen w-screen bg-gradient-to-r from-forest-left to-forest-right'>
      <Layout>
        <Layout.Header>
          <Searcher />
        </Layout.Header>
        <Layout.Main></Layout.Main>
        <Layout.Sidebar items={items}></Layout.Sidebar>
      </Layout>
    </div>
  )
}

export default App;
