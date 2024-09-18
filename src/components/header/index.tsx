'use client'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { options } from '@/locale'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Image } from "@chakra-ui/react";

export default () => {
    const { t, i18n } = useTranslation();
    const [currentLan, setCurrentLan] = useState(i18n.language)
    const navigation = [
        { name: t('nav_specialty'), href: '#' },
        { name: t('nav_env'), href: '#' },
        // { name: t('nav_org'), href: '#' },
        // { name: t('nav_help'), href: '#' },
        { name: t('nav_collaborate'), href: '#' },
        { name: t('nav_wallet'), href: '/wallet' },
        { name: t('nav_bonus'), href: '/bonus' },
    ]

    return <div className="flex top-0 z-50 bg-gray-800 border-b-style-solid -border--1 border-b-gray-500">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <a href="/">
                <Image src="/assets/images/logo.png" className="w-16 h-16" />
            </a>
            <div className="hidden ml-8 lg:flex lg:gap-x-12 ">
                {navigation.map((item) => {
                    const color = item.href === '#' ? 'text-white' : 'text-yellow-400'
                    return <a key={item.name} href={item.href} className={`text-sm leading-6 hover:text-blue-600 ${color}`}>
                        {item.name}
                    </a>
                })}
            </div>
        </nav>
        <div className="flex flex-self-center ml-auto mr-10">
            <div className="flex flex-row items-center">
                <select className='rounded-3xl bg-gray-800 border border-gray-500 text-gray-300 mr-3 p-2'
                    value={currentLan}
                    onChange={event => {
                        i18n.changeLanguage(event.target.value)
                        setCurrentLan(event.target.value)
                    }}>
                    {
                        options.map(o => {
                            return <option className="m-2 mr-4 ml-4" key={o.k} value={o.k} >{o.v}</option>
                        })
                    }
                </select>
                <ConnectButton />
            </div>
        </div>
    </div >
}