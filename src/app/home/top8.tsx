"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-justify-between bg-gray-800 pt-30 pb-30 ">
    <div className='flex'><img src='/assets/images/top8_1.png' className='w-100'></img></div>
    <div className="flex flex-col w-full flex-items-center mt-10">

      <span className="font-size-8 mt-4 text-white">
        {t('top_8_1')}
      </span>
      <div className="mt-4 ">
        <span className="font-size-4 text-white">
          {t('top_8_2')}
        </span>
      </div>
      <div className="mt-4">
        <button className="font-size-3 bg-gray-800 text-white b-rounded-14 b-gray-4 flex flex-items-center p-3 pl-8 pr-8">
          {t('more')} <ChevronRightIcon width={14} />
        </button>
      </div>
    </div>
    <div className='flex bottom-1'><img src='/assets/images/top8_2.png' className='w-100'></img></div>
  </div>
}