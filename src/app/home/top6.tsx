"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col flex-items-center p35 bg-white v-100%" >

      <div className="flex flex-col ">
        <div>
          <button className="b-rounded-14 bg-#294AF5 text-white flex flex-items-center b-4 b-gray-200 flex-justify-center">
            <embed src="/assets/icon-fonts/browser.svg" className="mr-1" />
            {t('top_6_button')}
          </button>
        </div>
        <span className="font-size-6 mt-2">
          {t('top_6_title')}
        </span>
        <div className="mt-2 flex flex-justify-between ">
          <span className="font-size-3 ">
            {t('top_6_title_desc')}
          </span>
          <span className='font-size-3 hover:text-#294AF5 flex flex-items-center mr-10'>
            {t('more')}
            <ChevronRightIcon width={14} />
          </span>
        </div>

        <div className="flex flex-justify-center mt-10">
          <div className='mr-8 flex'>
            <img src='/assets/images/top6_1.png' className='w-90' />
          </div>
          <div className='mr-8 pos-relative'>
            <div className='pos-absolute mt-8 left-50% flex flex-items-center' style={{ transform: 'translate(-50%)' }}>
              <span className='text-4 text-center text-#4B5563'>{t('top_6_img_2')}</span>
            </div>
            <img src='/assets/icon-fonts/top6_2.svg' className='w-90 b-rounded-10 b-rounded-10 b-solid b-gray-3 b-1' />
          </div>

          <div className='mr-8 flex flex-col flex-items-center p-5 b-rounded-10 b-solid b-#C0FFEA b-1 bg-#D7F9ED' >
            <img src='/assets/images/top6_3.png' className='w-80 h-140 ' />
            <span className='text-4 mt-4 text-center w-80 text-#4B5563'>{t('top_6_img_3')}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
}