'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';
import { useRouter } from 'next/router';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (url) => {
        setActiveLink(url);
        setIsTransitioning(true);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleStart = () => {
            setIsTransitioning(true);
        };

        const handleComplete = () => {
            setIsTransitioning(false);
            setActiveLink(null);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 z-10 md:absolute mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img src={siteDetails.siteLogo} alt={siteDetails.siteName} className="min-w-fit w-7 h-7" />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className={`transition-colors ${
                                        router.pathname === item.url
                                            ? "text-primary font-semibold"
                                            : "text-foreground hover:text-foreground-accent"
                                    } ${activeLink === item.url && isTransitioning ? 'animate-[pulse_1s_ease-in-out_infinite] !font-bold' : ''}`}
                                    onClick={() => handleLinkClick(item.url)}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                href="#cta" 
                                className={`text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors ${
                                    activeLink === '#cta' && isTransitioning ? 'animate-[pulse_1s_ease-in-out_infinite]' : ''
                                }`}
                                onClick={() => handleLinkClick('#cta')}
                            >
                                Download
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className={`block transition-colors ${
                                        router.pathname === item.url
                                            ? "text-primary font-semibold"
                                            : "text-foreground hover:text-primary"
                                    } ${activeLink === item.url && isTransitioning ? 'animate-[pulse_1s_ease-in-out_infinite]' : ''}`}
                                    onClick={() => handleLinkClick(item.url)}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                href="#cta" 
                                className={`block text-black bg-primary hover:bg-primary-accent px-8 py-3 rounded-full transition-colors ${
                                    activeLink === '#cta' && isTransitioning ? 'animate-[pulse_1s_ease-in-out_infinite]' : ''
                                }`}
                                onClick={() => handleLinkClick('#cta')}
                            >
                                Download
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
