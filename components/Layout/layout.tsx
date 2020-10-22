import React from "react";
import Footer from "../Page/Footer";
import Header from "../Page/Header";

const Layout = ({children}:any) => {
    return (
        <div className="global">
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
}
export default Layout;