"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
export default function () {
  const { t } = useTranslation();
  return <div className="flex justify-between bg-gray-800 pt-32 pb-32 ">
    <div className='flex'><img src='/assets/images/top8_1.png' className='w-100'></img></div>
    <div className="flex flex-col w-full items-center mt-10">

      <span className="text-3xl mt-4 text-white">
        {t('top_8_1')}
      </span>
      <div className="mt-4 ">
        <span className="text-xl text-white">
          {t('top_8_2')}
        </span>
      </div>
      <div className="mt-4">
        <button className="font-xl bg-gray-800 text-white rounded-3xl border-gray-400 flex items-center p-2 pl-8 pr-8">
          {t('more')}
          <ChevronRightIcon boxSize={4} />
        </button>
      </div>
    </div>
    <div className='flex bottom'><img src='/assets/images/top8_2.png' className='w-100'></img></div>
  </div>
}