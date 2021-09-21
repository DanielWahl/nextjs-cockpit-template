import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scrollchor } from "react-scrollchor";
import PageEntry from "../../types/page/PageEntry";
import PageProps from "../../types/page/PageProps";
import navigationAnim from "../../helpers/NavigationAnim";

const Navigation = (props: PageProps) => {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);

    useEffect(() => {
        const scrollEvent = () => {
            let st: number = window.pageYOffset;
            navigationAnim(lastScrollTop, window);
            setLastScrollTop(st);
        };

        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, [lastScrollTop]);

    const renderLogo = () => {
        if (props?.isHome) {
            return (
                <Scrollchor to="#mainHeader" className="navLink">
                    <a>
                        <div className="logo"> </div>
                    </a>
                </Scrollchor>
            );
        } else {
            return (
                <Link href="/">
                    <a>
                        <div className="logo"> </div>
                    </a>
                </Link>
            );
        }
    };

    const renderStaticNavigation = () => {
        return (
            <ul>
                <li>
                    <Link href="/aboutus">
                        <a className="navLink">About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery">
                        <a className="navLink">Gallery</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="navLink">Contact</a>
                    </Link>
                </li>
            </ul>
        );
    };

    return (
        <nav className="fixed" id="mainNav">
            <div className="content grid fraction-auto paddingTop--none paddingBottom--none">
                <aside className="logoContainer flex flex-center--vertical">
                    {renderLogo()}
                </aside>

                <aside className="nav__wrapper">
                    <input type="checkbox" className="mobileCheckbox" />
                    <span className="mobileToggle"> </span>
                    <span className="mobileToggle"> </span>
                    <span className="mobileToggle"> </span>
                    <div className="nav__inner">{renderStaticNavigation()}</div>
                </aside>
            </div>
        </nav>
    );
};
export default Navigation;
