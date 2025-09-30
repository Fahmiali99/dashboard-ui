import React from 'react'
import WidgetTypes from '../widget-types'
import { widgetMenu } from '@/common/dashboard'

function WidgetMenu() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:!gap-6 lg:!gap-6 xl:!gap-10 pt-10">
      {widgetMenu.map((item, index) => (
        <div key={index} className="bg-white rounded-[14px] drop-shadow-[6px_6px_30px_rgba(81,114,144,0.2),_2px_2px_4px_rgba(103,124,143,0.15)]">
          <WidgetTypes type={item.type} item_chart={item} />
        </div>
      ))}
    </div>
  )
}

export default WidgetMenu
