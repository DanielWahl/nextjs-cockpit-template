import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Content from "../components/Content/Content";
import PageProps from "../types/page/PageProps";
import Fetch from "../helpers/Fetch";
import HTMLHead from "../components/Page/HTMLHead";
import React from "react";

const AboutUs: React.FC<PageProps> = (props) => {
    return (
        <Layout>
            <HTMLHead> </HTMLHead>
            <Content {...props} data={props.page} />
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const siteSettings = await Fetch.fetchSiteSettings();
    const page = await Fetch.fetchPage("aboutus");
    const errorPage = await Fetch.fetchErrorPage();

    return {
        props: {
            siteSettings,
            page,
            errorPage,
        },
    };
}

export default AboutUs;
