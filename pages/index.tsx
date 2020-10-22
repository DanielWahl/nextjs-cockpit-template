import Head from 'next/head'
import Layout from "../components/Layout/layout";
import Content from "../components/Content/Content";
import PageProps from '../types/page/PageProps';

const Home = (props:PageProps) => {

    const currentPageData = () => {
        for(let page of props.allPages){
            if(page.name === "Homepage") {
               return page;
            }
        }
    }

    return (
        <Layout>
            <Head>
                <title>Default Template - Home</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="This is the home-page"
                />
            </Head>
            <Content {...props} data={currentPageData()} />
        </Layout>
    )
}

export default Home;