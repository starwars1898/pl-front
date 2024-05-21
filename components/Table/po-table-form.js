import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { BiSave } from "react-icons/bi"
import { RiAiGenerate } from "react-icons/ri"
import { FiBox } from "react-icons/fi"
import { RxReset } from "react-icons/rx"
import { FiGrid } from "react-icons/fi"
import { doGetBranchPriority } from '@/container/home/actions'
import { BranchPriorityStore } from '@/container/home/store'
import { QtyDistribution } from '@/utils/computation'
import { doGetTransferData } from '@/container/home/actions'
import SaveModal from '../Modal/SaveModal'
import toast from 'react-hot-toast'

function PoTableForm({ transfer }) {

  const [DistButton, setDistButton] = useState(true)
  const [SaveButton, setSaveButton] = useState(true)
  const [ShowModal, setShowModal] = useState(false)
  const [ShowMenu, setShowMenu] = useState(false)
  const [data, set] = transfer
  const {BranchPriorityModel, setBranchPriorityModel} = BranchPriorityStore()

  // USEEFFECTS
  useEffect(() => {
    doGetBranchPriority(setBranchPriorityModel)
  }, [])

  useEffect(() => {
    const plValues = Object.values(data)

    if(SaveButton !== false){
      plValues.length !== 0 && setDistButton(false) 
    }
    
  }, [data])

  // CLICK EVENTS
  const handleDistributeRemaining = () => {
    QtyDistribution(data, BranchPriorityModel, set)
    setDistButton(true)
    setSaveButton(false)
    toast.success('You Applied Priority Distribution.')
  }

  const handleReset = () => {
    doGetTransferData(set)
    setSaveButton(true)
  }

  const handleSave = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className='h-[5rem] flex flex-wrap absolute top-[9rem] lg:top-[calc(100%-6rem)] left-0 lg:left-[15rem] z-10 p-1 items-center'>
        <div className='flex'>
          <Button 
            type='secondary'
            buttonClass='p-2 flex text-xs md:text-md mx-1 items-center'
            iconClass='my-auto text-lg'
            icon={<FiGrid />}
            onClick={(() => setShowMenu(state => !state))}
          />
        </div>
        {
          ShowMenu &&
          <>
            <div className='flex'>
              <Button 
                text='Generate PL'
                type='tertiary'
                buttonClass='p-2 flex text-xs md:text-md mx-1 items-center'
                iconClass='my-auto mr-1 text-lg'
                icon={<RiAiGenerate />}
              />
            </div>
            <div className='flex'>
              <Button 
                disabled={DistButton}
                text='Distribute Rem'
                buttonClass='p-2 flex text-xs md:text-md mx-1 items-center'
                iconClass='my-auto mr-1 text-lg'
                icon={<FiBox />}
                onClick={() => handleDistributeRemaining()}
              />
            </div>
            <div className='flex'>
              <Button 
                disabled={SaveButton}
                text='Undo'
                buttonClass='p-2 flex text-xs md:text-md mx-1 items-center'
                iconClass='my-auto mr-1 text-lg'
                icon={<RxReset />}
                onClick={() => handleReset()}
              />
            </div>
            <div className='flex'>
              <Button 
                // disabled={SaveButton}
                text='Save'
                buttonClass='p-2 flex text-xs md:text-md mx-1 items-center'
                iconClass='my-auto mr-1 text-lg'
                icon={<BiSave />}
                onClick={() => handleSave()}
              />
            </div>
          </>
        }
      </div>

      {/* MODAL */}
      <SaveModal 
        title='Save Distribution' 
        message='Are you sure you want to save this distribution? please check for any remaining.'
        open={ShowModal} 
        onClose={() => setShowModal(false)}
      
      />
    </>
  )
}

export default PoTableForm