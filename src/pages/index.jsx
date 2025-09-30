import React from 'react'
import Layout from '../components/layout'
import WidgetMenu from '@/components/dashboard/widget-menu'
import Charts from '@/components/dashboard/charts'

function Dashboard() {
  return (
    <Layout>
      <div className='space-y-4 md:!space-y-6 lg:!space-y-6 xl:!space-y-10' >
        <WidgetMenu />
        <Charts />
      </div>
    </Layout>
  )
}

export default Dashboard