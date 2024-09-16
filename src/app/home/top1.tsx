"use client"
import { useTranslation } from "react-i18next";

export default function Top() {
  const { t, i18n } = useTranslation();
  return <div className="relative bg-gray-800 w-full flex-1 flex flex-col items-center" >
    <div className="flex flex-col max-w-3xl pt-8 pb-8 items-center w-full flex-1 ">
      <div className="mt-10 text-center">
        <h1 className="text-4xl tracking-tight text-gray-100 sm:text-5xl">
          {t('top1_title')}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-3xl">
          {t('top1_title_desc')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="border-rd-8 bg-blue-600 px-5.5 py-3.5 text-1xl font-semibold
             text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
             focus-visible:outline-offset-2 focus-visible:outline-indigo-600
             rounded-xl p-4"
          >
            {t('top1_register_first')}
          </a>
        </div>
        <div className="flex flex-col mt-5  items-center justify-center gap-x-6">
          <span className=" text-white text-4 leading-8 text-center ">
            {t('top1_supply_1')}
          </span>
          <span className=" text-white text-4 leading-8 text-center ">
            {t('top1_supply_2')}
          </span>
        </div>
      </div>
      <div className="mt-12">
        <img src="/assets/icon-fonts/head.svg" />
      </div>
      <img src="/assets/icon-fonts/coins.svg" alt="" className='absolute w-32 h-32 right-0 bottom-5' />
      <img src="/assets/icon-fonts/right-hand.svg" alt="" className='absolute w-32 h-32 left-0 bottom-8' />
    </div>

  </div>
}