"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathName = usePathname()
    return (
        <header className={`header-area ${pathName === "/"?"header1":"about-us"}`}>
            <div className="header-logo">
                <Link href="/"><img alt="image" className="img-fluid" src={`assets/image/${pathName === "/"?"global-sky-logo.svg":"global-sky-logo2.svg"}`} /></Link>
            </div>
            <div className="main-menu">
                <div className="mobile-menu-logo">
                    <a href="index.html"><img alt="image" className="img-fluid" src="assets/image/global-sky-logo.svg" /></a>
                </div>
                <ul className="menu-list">
                    <li>
                        <Link href="/" className="drop-down">HOME </Link>
                    </li>
                    <li>
                        <Link href="/attraction">Global Visa</Link>
                    </li>
                    <li><Link href="/attraction">UAE Attraction</Link></li>
                    <li><Link href="/attraction">holiday package</Link></li>
                    <li><Link href="/attraction">Travel insurance</Link></li>
                    <li>
                        <Link href="/about" className="drop-down"> About Us</Link>
                    </li>
                </ul>
                <div className="d-xl-none d-block">
                    <a className="primary-btn1" href="#">
                        Consultancy
                    </a>
                </div>
            </div>
            <div className="nav-right">
                <div className="btn-area d-md-flex d-none">
                    <a className="primary-btn1" href="#">
                        Consultancy
                    </a>
                </div>
                <div className="sidebar-button mobile-menu-btn ">
                    <span />
                </div>
            </div>
        </header>

    )
}

export default Header