import React, { useEffect } from 'react'
import ContentSidebar from '@/components/Layout/content-sidebar'
import MobileSideBar from '@/components/Navigation/Sidebar/mobile-sidebar'
import SideBar from '@/components/Navigation/Sidebar'
import Content from '@/components/Content'
import { NavigationStore } from '@/utils/store'
import { HistoryStore } from './store'
import HistoryTable from '@/components/Table/history-table'
import HistoryLabel from '@/components/Table/history-label'
// import { doGetHistoryList } from './actions'

function HistoryContainer() {

  //STORES
  const { ShowMobileMenu } = NavigationStore()
  // const { HistoryModel, setHistoryModel } = HistoryStore()

  // useEffect(() => {
  //   doGetHistoryList(setHistoryModel)
  // },[])

  return (
    <>
      <ContentSidebar>
        <SideBar />
        <Content>
            <HistoryLabel />
            {/* <HistoryTable data={HistoryModel}/> */}
            <HistoryTable />
        </Content>
      </ContentSidebar>
      {
        ShowMobileMenu && <MobileSideBar />
      }
    </>
  )
}

export default HistoryContainer