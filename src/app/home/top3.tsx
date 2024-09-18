"use client"
import Icon from '@/components/icon';
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next';
export default function () {
  const { t } = useTranslation();
  return <div className="flex justify-between bg-gray-800 pt-64 pb-64 ">
    <div className='flex'><img src='/assets/images/top3_1.png' ></img></div>
    <div className="flex flex-col w-full items-center mt-12">
      <button className=" text-white flex items-center justify-center border-2 border-gray-300 hover:border-blue-300 p-2 pl-4 pr-4">
        <Icon source='/assets/icon-fonts/plus.svg' size={16} className='mr-2' />
        <span >{t('top_3_create_community')}</span>
      </button>
      <span className="text-4xl mt-8 text-white">
        {t('top_3_protect_authority')}
      </span>
      <div className="mt-4 ">
        <span className="text-lg text-white">
          {t('top_3_protect_authority_desc')}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-sm text-gray-400 flex self-center items-center">
          {t('top_3_free_community')}
          <ChevronRightIcon boxSize={5} />
        </span>
      </div>
    </div>
    <div className='flex'><img src='/assets/images/top3_2.png' className='w-100'></img></div>
  </div>
}