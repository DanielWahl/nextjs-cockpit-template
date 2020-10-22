import Head from 'next/head'
import Layout from "../components/Layout/layout";
import Content from "../components/Content/Content";
import PageProps from '../types/page/PageProps';

const AboutUs = (props:PageProps) => {

    const currentPageData = () => {
        for(let page of props.allPages){
            if(page.alias === "aboutus") {
                return page;
            }
        }
    }

    return (
        <Layout>
            <Head>
                <title>Default Template - Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content {...props} data={currentPageData()} />
        </Layout>
    )
}

export default AboutUs;