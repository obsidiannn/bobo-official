
"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col items-center p-32 bg-white v-100%" style={{ borderTopLeftRadius: '56px', borderTopRightRadius: '56px' }} >
      <div className="flex flex-col">
        <div>
          <button className="text-white flex items-center border-4  border-gray-200 hover:border-blue-300 justify-center p-2 pl-4 pr-4">
            <embed src="/assets/icon-fonts/eat.svg" className="mr-2" />
            {t('top_4_community')}
          </button>
        </div>

        <span className="text-3xl mt-2">
          {t('top_4_chat_title')}
        </span>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm ">
            {t('top_4_chat_title_desc')}
          </span>
          <span className='text-sm hover:text-blue-600 flex items-center mr-10'>
            {t('more')}
            <ChevronRightIcon boxSize={4} />
          </span>
        </div>
        <div className="flex justify-center mt-10">
          <div className='mr-8 flex p-5 border border-solid border-gray-300 rounded-3xl'>
            <img src='/assets/images/top4_1.png' className='w-80 h-140' />
          </div>
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-300 border ' >
            <div className='relative'>
              <div className='absolute mt-3  flex items-center' style={{ transform: 'translate(-50%)', left: '50%' }}>
                <span className='text-sm text-center text-gray-500'>{t('top_4_img_1a')}</span>
              </div>
              <img src='/assets/icon-fonts/top4_2a.svg' className='w-80 rounded-3xl border-solid border-gray-300 border' />
            </div>
            <div className='flex flex-col items-center rounded-3xl border-solid border-gray-300 border mt-10 w-80 '>
              <img src='/assets/images/top4_2b.png' className='w-80' />
              <span className='text-3 m-2 mb-6 text-center w-80 text-gray-600'>{t('top_4_img_1b')}</span>
            </div>
          </div>
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border border-gray-300 ' >
            <img src='/assets/images/top4_3.png' className='w-80 h-140 ' />
            <span className='text-sm mt-4 text-center w-80 text-gray-600'>{t('top_4_img_2')}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
}