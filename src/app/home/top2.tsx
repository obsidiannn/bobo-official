"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
import './homepage.css'
export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="screenContainer flex flex-col items-center p-20 bg-white v-100%">
      <div className="flex flex-col ">
        <div>
          <button className=" text-white flex items-center border-4  border-gray-200 hover:border-blue-300 justify-center p-2 pl-4 pr-4">
            <embed src="/assets/icon-fonts/eat.svg" className="mr-2" />
            {t('top_2_community')}
          </button>
        </div>
        <span className="text-2xl mt-4">
          {t('top_2_community_find')}
        </span>
        <div className="mt-2 flex flex-row justify-between ">
          <span className="text-sm ">
            {t('top_2_community_find_desc')}
          </span>
          <span className='text-sm hover:text-blue-600 flex items-center mr-10'>
            {t('more')}
            <ChevronRightIcon boxSize={5} />
          </span>
        </div>

        <div className="flex justify-center mt-10">
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-300 border ' >
            <img src='/assets/images/top2_1.png' className='w-80 h-140 ' />
            <span className='mt-4 text-center w-80 text-sm'>{t('top_2_img_1')}</span>
          </div>
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-300 border' >
            <div className='items-center  flex flex-col'>
              <span className='text-lg text-center text-gray-600 m-4'>{t('top_2_img_2a')}</span>
              <img src='/assets/icon-fonts/top2_2a.svg' className='w-80 rounded-3xl border-rounded-3xl border-solid border-gray-3 border' />
            </div>
            <div className='flex flex-col items-center rounded-3xl border-solid border-gray-300 border mt-10 w-80 '>

              <img src='/assets/images/top2_2b.png' className='w-80  rounded-3xl' />
              <span className='text-sm m-2 mb-6 text-center w-80 text-gray-600'>{t('top_2_img_2b')}</span>
            </div>
          </div>
          <div className='mr-8 flex flex-col items-center p-5 rounded-3xl border-solid border-gray-300 border ' >
            <img src='/assets/images/top2_3.png' className='w-80' />
          </div>
        </div>
      </div>

    </div>
  </div>
}