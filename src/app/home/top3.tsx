"use client"
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-justify-between bg-gray-800 pt-30 pb-30 ">
    <div className='flex'><img src='/assets/images/top3_1.png' className='w-100'></img></div>
    <div className="flex flex-col w-full flex-items-center mt-10">
      <button className="b-rounded-14 bg-#294AF5 text-white flex flex-items-center b-4 b-gray-200 flex-justify-center pl-8 pr-8">
        <AddIcon width={14} className='mr-2' />
        {t('top_3_create_community')}
      </button>
      <span className="font-size-8 mt-4 text-white">
        {t('top_3_protect_authority')}
      </span>
      <div className="mt-4 ">
        <span className="font-size-4 text-white">
          {t('top_3_protect_authority_desc')}
        </span>
      </div>
      <div className="mt-4">
        <span className="font-size-3 text-gray-4 flex flex-self-center">
          {t('top_3_free_community')}<ChevronRightIcon width={14} />
        </span>
      </div>
    </div>
    <div className='flex'><img src='/assets/images/top3_2.png' className='w-100'></img></div>
  </div>
}