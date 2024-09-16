"use client"
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <div className="flex flex-col  w-full bg-gray-800 ">
    <div className="flex flex-col p30 flex-items-center  bg-white v-100%" style={{ borderTopLeftRadius: '56px', borderTopRightRadius: '56px' }}>
      <div className='flex flex-items-center p10'>
        <div className='flex flex-col p8 b-rounded-4 b-solid b-1 b-gray-3 mr-6 flex-items-center'>
          <span className='text-7 mb-3'>{t('top_9_card_1a')}</span>
          <span className='text-4 mb-3'>{t('top_9_card_1b')}</span>
          <span className='text-3 mb-3 text-gray'>{t('top_9_card_1c')} </span>
        </div>
        <div className='flex flex-col p8 b-rounded-4 b-solid b-1 b-gray-3 mr-6 flex-items-center'>
          <span className='text-7 mb-3'>{t('top_9_card_2a')}</span>
          <span className='text-4 mb-3'>{t('top_9_card_2b')}</span>
          <span className='text-3 mb-3 text-gray'>{t('top_9_card_2c')} </span>
        </div>
        <div className='flex flex-col p8 b-rounded-4 b-solid b-1 b-gray-3 mr-6 flex-items-center'>
          <span className='text-7 mb-3'>{t('top_9_card_3a')}</span>
          <span className='text-4 mb-3'>{t('top_9_card_3b')}</span>
          <span className='text-3 mb-3 text-gray'>{t('top_9_card_3c')} </span>
        </div>
        <img src="/assets/icon-fonts/box.svg" className='pos-absolute pos-left-2xl ' />
      </div>

      <div className='flex flex-items-center p10'>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='font-600 text-8 mb-2'>{t('top_9_contract_1a')}</span>
          <span className='text-4'>{t('top_9_contract_1b')}</span>
        </div>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='font-500 text-5 mb-2'>{t('top_9_contract_2a')}</span>
          <span className='text-4 mb-2'>{t('top_9_contract_2b')}</span>
          <span className='text-4 mb-2'>{t('top_9_contract_2c')}</span>
        </div>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='text-4 mb-2'>{t('top_9_contract_3a')}</span>
        </div>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='text-4 mb-2'>{t('top_9_contract_4a')}</span>
        </div>
      </div>
      <div className='flex flex-items-center p10 mt-30'>
        <span>{t('top_9_id_mark')}</span>
      </div>
    </div>
  </div>
}