import { AppProps } from 'next/app'
import React, { useState, useEffect } from "react";
import '../styles/style.sass'
import Fetch from '../helpers/Fetch';
import Vars from '../helpers/Vars';

function MyApp({ Component, pageProps }: AppProps) {

    const [isLoading, setIsLoading] 		= useState(true);
    const [siteSettings, setSiteSettings] 	= useState([]);
    const [pages, setPages] 				= useState([]);
    const [errorPage, setErrorPage] 		= useState([]);

    useEffect(() => {
        const fetch = async () => {
            let fetchedSiteSettings = await Fetch.fetchSiteSettings();
            let fetchedPages:any 	  = await Fetch.fetchPages();
            let fetchedErrorPage 	  = await Fetch.fetchErrorPage();

            setIsLoading(false);
            setSiteSettings(fetchedSiteSettings);
            setPages(fetchedPages);
            setErrorPage(fetchedErrorPage);
        }
        fetch().catch((err) => console.log(err));
    }, []);

    if(isLoading) {
        return (
            <div style={{width: '100vw', height: '100vh', margin: '45vh auto', textAlign: 'center'}}>
                Loading...
            </div>
        )
    }

    return <Component {...pageProps} data={errorPage} allPages={pages} siteSettings={siteSettings}/>
}

export default MyApp
