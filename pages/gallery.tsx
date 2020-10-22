import Head from 'next/head'
import Layout from "../components/Layout/layout";

const Gallery = (props) => {
    return (
        <Layout>
            <Head>
                <title>Default Template - Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="grid half-half">
                <div className="frame">
                    <h1>Gallery</h1>
                </div>
                <div className="frame">
                    <h1>Gallery</h1>
                </div>
            </section>
        </Layout>
    )
}

export default Gallery;