
"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col flex-items-center p35 bg-white v-100%" style={{ borderTopLeftRadius: '56px', borderTopRightRadius: '56px' }} >
      <div className="flex flex-col">
        <div>
          <button className="b-rounded-14 bg-#294AF5 text-white flex flex-items-center b-4 b-gray-200 flex-justify-center p2 pl-4 pr-4">
            <embed src="/assets/icon-fonts/eat.svg" className="mr-2" />
            {t('top_4_community')}
          </button>
        </div>

        <span className="font-size-6 mt-2">
          {t('top_4_chat_title')}
        </span>
        <div className="mt-2 flex flex-justify-between ">
          <span className="font-size-3 ">
            {t('top_4_chat_title_desc')}
          </span>
          <span className='font-size-3 hover:text-#294AF5 flex flex-items-center mr-10'>
            {t('more')}
            <ChevronRightIcon width={14} />
          </span>
        </div>
        <div className="flex flex-justify-center mt-10">
          <div className='mr-8 flex p5 b-1 b-solid b-gray-300  b-rounded-10 '>
            <img src='/assets/images/top4_1.png' className='w-80 h-140' />
          </div>
          <div className='mr-8 flex flex-col flex-items-center p-5 b-rounded-10 b-solid b-gray-3 b-1 ' >
            <div className='pos-relative'>
              <div className='pos-absolute mt-3 left-50% flex flex-items-center' style={{ transform: 'translate(-50%)' }}>
                <span className='text-3 text-center text-#4B5563'>{t('top_4_img_1a')}</span>
              </div>
              <img src='/assets/icon-fonts/top4_2a.svg' className='w-80 b-rounded-10 b-rounded-10 b-solid b-gray-3 b-1' />
            </div>
            <div className='flex flex-col flex-items-center b-rounded-10 b-solid b-gray-3 b-1 mt-10 w-80 '>
              <img src='/assets/images/top4_2b.png' className='w-80  b-rounded-10' />
              <span className='text-3 m-2 mb-6 text-center w-80 text-#4B5563'>{t('top_4_img_1b')}</span>
            </div>
          </div>
          <div className='mr-8 flex flex-col flex-items-center p-5 b-rounded-10 b-solid b-#FFEBC2 b-1 bg-#FFFBF2' >
            <img src='/assets/images/top4_3.png' className='w-80 h-140 ' />
            <span className='text-3 mt-4 text-center w-80 text-#4B5563'>{t('top_4_img_2')}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
}