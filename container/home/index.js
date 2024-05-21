import React, { useEffect } from 'react'
import ContentSidebar from '@/components/Layout/content-sidebar'
import MobileSideBar from '@/components/Navigation/Sidebar/mobile-sidebar'
import SideBar from '@/components/Navigation/Sidebar'
import Content from '@/components/Content'
import { NavigationStore } from '@/utils/store'
import { BranchStore, TransferDataStore } from './store'
import { doGetBranchlist, doGetTransferData } from './actions'
import PoTable from '@/components/Table/po-table'

function HomeContainer() {

  //STORES
  const { ShowMobileMenu } = NavigationStore()
  const { BranchModel, setBranchModel } = BranchStore()
  const { TransferData, setTransferData, setDistTransferData } = TransferDataStore()

  useEffect(() => {
    doGetBranchlist(setBranchModel)
    doGetTransferData(setTransferData)
  }, [])

  return (
    <>
      <ContentSidebar>
        <SideBar />
        <Content>
          <PoTable 
            branch={BranchModel} 
            transfer={TransferData} 
            setForm={setDistTransferData}
          />
        </Content>
      </ContentSidebar>
      {
        ShowMobileMenu && <MobileSideBar />
      }
    </>
  )
}

export default HomeContainer