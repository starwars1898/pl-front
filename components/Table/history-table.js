import React, { useState, useEffect } from 'react'
import { DateTimeFormat } from '@/utils/data-helper'
import Pagination from './pagination'
import { doGetHistoryList } from '@/container/history/actions'
import { HistoryStore } from '@/container/history/store'

function HistoryTable() {

  const {HistoryModel, setHistoryModel} = HistoryStore()
  const [currentPage, setCurrentPage] = useState(1)

  const historyData = Object.values(HistoryModel || [])

  const pageOptions = {
    page: currentPage
  }

  useEffect(() => {
    doGetHistoryList(setHistoryModel, pageOptions)
  },[currentPage])
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div className='w-full overflow-y-auto h-[calc(100%-3rem)] max-h-[calc(100%-3rem)] bg-white rounded-b-md border-t-2 border-gray-100 p-2'>

      <table className='w-full text-left rtl:text-right text-gray-500 dark:text-gray-500'>

        <thead className='bg-gray-100 shadow-md'>
          <tr className=''>
            <th className='px-6 py-3'>UserID</th>
            <th className='px-6 py-3'>Name</th>
            <th className='px-6 py-3'>Activity</th>
            <th className='px-6 py-3'>Date</th>
          </tr>
        </thead>

        <tbody>
          {
            historyData.length === 0
            ?
              <tr className=''>
                <td colSpan="5" className='px-6 py-2'>No Result.</td>
              </tr>
            :
            historyData.map((row) => {

              const dateTime = DateTimeFormat(row.date)

              return (
                <tr className='text-xs hover:bg-gray-50' key={row.id}>
                  <td className='px-6 py-3'>{row.user_id}</td>
                  <td className='px-6 py-3'>{row.name}</td>
                  <td className='px-6 py-3'>{row.activity}</td>
                  <td className='px-6 py-3'>{dateTime}</td>
                </tr> 
              )

            })
          }
        </tbody>

      </table>

      <Pagination page={currentPage} onPageChange={handlePageChange}/>

    </div>
  )
}

export default HistoryTable