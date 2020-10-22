import React, { useState, useCallback } from "react";
import Link from 'next/link'
// @ts-ignore
import Scrollchor from 'react-scrollchor';
import PageEntry from '../../types/page/PageEntry';
import PageProps from '../../types/page/PageProps';

const Navigation = (props:PageProps) => {

	const [lastScrollTop, setLastScrollTop] = useState(0);

	useCallback(() => {
		const handleScroll:any = () => {

			let nav = document.getElementById("mainNav"); //.classList.add("background");
			let headerHeight = (document.getElementById("mainHeader") as HTMLElement).offsetHeight - 100 || 100;
			let windowWidth = window.innerWidth;
			let st = window.pageYOffset;
			let isScrollUp = st < lastScrollTop;
			setLastScrollTop(st);

			if(windowWidth > 780) {
				if (isScrollUp) {
					if (st < 70) {
						nav?.classList.remove("background");
					}
				} else {
					if (st > headerHeight) {
						nav?.classList.add("background");
					}
				}
			} else {
				if(isScrollUp) {
					if(st > 70) {
						nav?.classList.add("background");
					} else {
						nav?.classList.remove("background");
					}
				} else {
					nav?.classList.remove("background");
				}
			}

		}
		window.addEventListener('scroll', handleScroll());
		return () => {
			window.removeEventListener('scroll', handleScroll());
		};
	}, [lastScrollTop]);

	const renderLogo = () => {
		if(props.isHome) {
			return (
				<Scrollchor to="#mainHeader" className="navLink">
					<a>
						<div className="logo"> </div>
					</a>
				</Scrollchor>
			)
		} else {
			return (
				<Link href="/">
					<a>
						<div className="logo"> </div>
					</a>
				</Link>
			)
		}
	}

	const renderNavigation = () => {
		let pages = props.allPages?.map((page:PageEntry, i:number) => {
			if(page.alias !== '404') {
				return (
					<li key={"nav-li-" + i}>
						<Link href={"/" + page.alias}>
							<a className="navLink">{page.name}</a>
						</Link>
					</li>
				)
			} else {
				return null;
			}

		});

		return <ul>{pages}</ul>;
	}

	const renderStaticNavigation = () => {
		return (
			<ul>
				<li>
					<Link href="/aboutus"><a className="navLink">About Us</a></Link>
				</li>
				<li>
					<Link href="/gallery"><a className="navLink">Gallery</a></Link>
				</li>
				<li>
					<Link href="/contact"><a className="navLink">Contact</a></Link>
				</li>
			</ul>
		)
	}


	return (
		<nav className="" id="mainNav">
			<div className="content grid fraction-auto">
				<aside className="logoContainer">
					{renderLogo()}
				</aside>

				<aside className="navContainer">
					<input type="checkbox" className="mobileCheckbox"/>
					<span className="mobileToggle"> </span>
					<span className="mobileToggle"> </span>
					<span className="mobileToggle"> </span>

					{renderStaticNavigation()}

				</aside>
			</div>
		</nav>
	);


}
export default Navigation;