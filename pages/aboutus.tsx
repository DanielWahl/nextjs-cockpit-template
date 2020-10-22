import Head from 'next/head'
import Layout from "../components/Layout/layout";
import Content from "../components/Content/Content";

const AboutUs = (props) => {
    return (
        <Layout>
            <Head>
                <title>Default Template - Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content {...props} />
        </Layout>
    )
}

export default AboutUs;