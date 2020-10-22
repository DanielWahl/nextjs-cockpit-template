import Head from 'next/head'
import Layout from "../components/Layout/layout";

const ErrorPage = () => {
    return (
        <Layout>
            <Head>
                <title>Default Template - Error 404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>Error 404</h2>
            <h4>Page not found</h4>
        </Layout>
    )
}

export default ErrorPage;