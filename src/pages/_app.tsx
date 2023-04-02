import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <div className='bg-[url(https://s2.loli.net/2023/04/02/rwsOi4neNcjmVJG.png)] bg-cover bg-center'>
      <Layout>
        <Layout.Header />
        <Layout.Main >
          <Component {...pageProps} />
        </Layout.Main>
        <Layout.SideBar />
        <Layout.Footer />
      </Layout>
    </div>
  )
}

export default MyApp
