import '../styles/globals.css';
import Layout from '@/components/layout';
import Searcher from '@/components/materials/Searcher';
import { useEffect } from 'react';
import SidebarItem from '@/components/materials/SidebarItem';
import Button from '@/components/materials/Button';
import { wrapper } from '@/store/store';
import LoginOrUser from '@/components/project/LoginOrUser';


const App = ({ Component, pageProps }: any) => {

  useEffect(() => {
    require("../../public/iconfont.js");
  })

  const items = [
    {
      icon: 'home',
      text: 'Home',
      clickHandler: () => { }
    },
    {
      icon: 'location',
      text: 'local',
      clickHandler: () => { }
    },

    {
      icon: "chatboxes",
      text: "message",
      clickHandler: () => { }
    },
    {
      icon: "favor_light",
      text: "star",
      clickHandler: () => { }
    },
    {
      icon: "repair",
      text: "setting",
      clickHandler: () => { }
    }
  ]

  return (
    <div className='h-screen w-screen bg-gradient-to-r from-forest-left to-forest-right'>
      <Layout>
        {/* Header */}
        <Layout.Header>
          <div className='flex w-full'>
            {/* Logo */}
            <div className='text-white flex items-center text-center w-1/4 text-2xl pl-20'>
              <span className=''>Bea</span><span className='text-green-400'>ver.</span>
            </div>

            {/* Searcher */}
            <div className='flex-1 h-12'>
              <Searcher />
            </div>

            <div className='w-1/5 ml-11'>
              <LoginOrUser></LoginOrUser>
            </div>
          </div>
        </Layout.Header>

        <Layout.Main>
          <div className='w-full'>
            <div className='rounded-3xl bg-forest-glass/[.12] h-full w-4/12 inline-block'>
              <Component {...pageProps} />
            </div>
            <div className='w-4/12 h-full rounded-3xl ml-20 bg-forest-glass/[.12] inline-block'></div>
          </div>
        </Layout.Main>

        {/* sideBar */}
        <Layout.Sidebar>
          <div className='h-full pl-14 w-full flex flex-col items-start justify-center'>
            <div className='pb-7 -mt-28'>
              {items.map(item => <SidebarItem {...item} key={item.text} />)}
            </div>
            <Button text="tweet"></Button>
          </div>
        </Layout.Sidebar>
      </Layout>
    </div>
  )
}


export default wrapper.withRedux(App);
export async function getServerSideProps() {
  const data = { a: 1, b: 2 };
  return { props: { data } }
}