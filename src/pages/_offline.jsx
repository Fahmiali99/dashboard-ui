import React from 'react'
import Layout from '../components/layout'
import WidgetMenu from '@/components/dashboard/widget-menu'
import Charts from '@/components/dashboard/charts'

function Dashboard() {
  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 rounded-2xl">
            <h1 className="text-3xl font-bold">You’re Offline</h1>
            <p className="mt-2 text-gray-600">
                It looks like your internet connection has been interrupted. Some features may not work.
            </p>
            <button
                onClick={() => window.location.reload()} title='Muat Ulang Halaman'
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Try Reloading
            </button>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard