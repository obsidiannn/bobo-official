
"use client"
import { ChevronRightIcon, Icon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col items-center p-36 bg-white v-100%" >
      <div className="flex flex-col ">
        <div>
          <button className="rounded-3xl text-white flex items-center border-4 border-gray-200 justify-center">
            <embed src='/assets/icon-fonts/wallet.svg' className='mr-2' />
            {t('top_5_button')}
          </button>
        </div>
        <span className="text-3xl mt-2">
          {t('top_5_title')}
        </span>
        <div className="mt-2 flex justify-between ">
          <span className="text-lg ">
            {t('top_5_title_desc')}
          </span>
          <span className='text-sm hover:text-blue-600 flex items-center mr-10'>
            {t('more')}
            <ChevronRightIcon width={14} />
          </span>
        </div>

        <div className="flex justify-center mt-10">
          <div className='mr-8 flex p-8 border-solid border-gray-300 border rounded-3xl'>
            <img src='/assets/images/top5_1.png' className='w-80 h-120' />
          </div>
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-3 border' >
            <div className='relative'>
              <div className='absolute mt-3 flex items-center' style={{ transform: 'translate(-50%)' ,left: '50%'}}>
                <span className='text-sm text-center '>{t('top_5_img_1a')}</span>
              </div>
              <img src='/assets/icon-fonts/top5_2a.svg' className='w-80 ' />
            </div>
            <div className='flex flex-col items-center rounded-3xl border-solid border-gray-300 border mt-10 w-80 '>
              <img src='/assets/images/top5_2b.png' className='w-80  b-rounded-10' />
              <span className='text-3 m-2 mb-6 text-center w-80 text-#4B5563'>{t('top_4_img_1b')}</span>
            </div>
          </div>
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-300 border' >
            <img src='/assets/images/top5_3.png' className='w-80 h-140 ' />
            <span className='text-3 mt-4 text-center w-80 text-#4B5563'>{t('top_4_img_2')}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
}