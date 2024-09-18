"use client"
import { useTranslation } from "react-i18next";


export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex items-center p-36 bg-white v-100%" style={{ borderBottomLeftRadius: '56px', borderBottomRightRadius: '56px' }}  >
      <div className='flex flex-col items-center p-5 rounded-3xl border-gray-200 border border-solid'>
        <img src="/assets/images/top6_1.png" alt="" className='w-80' />
        <span className='text-lg mt-4 text-center'>{t('top_7_left')}</span>
      </div>
      <div className='flex flex-col ml-10'>
        <div className='flex flex-col  border-b border-gray-200 p-10'>
          <span className='mb-2 text-xl'>{t('top_7_r_1a')}</span>
          <span className='text-sm'>{t('top_7_r_1b')}</span>
        </div>
        <div className='flex flex-col  border-b border-gray-200 p-10'>
          <span className='mb-2 text-xl '>{t('top_7_r_2a')}</span>
          <span className='text-sm text-wrap'>{t('top_7_r_2b')}</span>
        </div>
        <div className='flex flex-col  border-b border-gray-200 p-10'>
          <span className='mb-2 text-xl'>{t('top_7_r_3a')}</span>
          <span className='text-sm '>{t('top_7_r_3b')}</span>
        </div>
        <div className='flex flex-col  p-10'>
          <span className='mb-2 text-xl'>{t('top_7_r_4a')}</span>
          <span className='text-#6C727F text-4'>{t('top_7_r_4b')}</span>
        </div>
      </div>
    </div>
  </div>
}