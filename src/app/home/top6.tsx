"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col flex-items-center p-36 bg-white v-100%" >

      <div className="flex flex-col ">
        <div>
          <button className="rounded-3xl bg-blue-700 text-white flex items-center border-4 border-gray-200 flex-justify-center">
            <embed src="/assets/icon-fonts/browser.svg" className="mr-1" />
            {t('top_6_button')}
          </button>
        </div>
        <span className="text-3xl mt-2">
          {t('top_6_title')}
        </span>
        <div className="mt-2 flex justify-between ">
          <span className="text-xl ">
            {t('top_6_title_desc')}
          </span>
          <span className='text-sm hover:text-blue-600 flex items-center mr-10'>
            {t('more')}
            <ChevronRightIcon boxSize={4} />
          </span>
        </div>

        <div className="flex flex-row justify-center mt-10">
          <div className='mr-8 flex flex-1'>
            <img src='/assets/images/top6_1.png' />
          </div>
          <div className='mr-8 relative flex-1'>
            <div className='absolute mt-8 flex items-center' style={{ transform: 'translate(-50%)', left: '50%' }}>
              <span className='text-4 text-center text-#4B5563'>{t('top_6_img_2')}</span>
            </div>
            <img src='/assets/icon-fonts/top6_2.svg' className='w-90 rounded-3xl border-solid border-gray-300 ' />
          </div>

          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-300 border' >
            <img src='/assets/images/top6_3.png' className='w-80 h-140 ' />
            <span className='text-lg mt-4 text-center w-80'>{t('top_6_img_3')}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
}