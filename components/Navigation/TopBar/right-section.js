import React, { useState, useRef, useEffect } from 'react'
import Icon from '@/components/Icon'
import { FiMenu } from "react-icons/fi"
import { NavigationStore } from '@/utils/store'
import { CgClose } from "react-icons/cg"
import { FaUser } from "react-icons/fa"
import SettingModal from './setting-modal'

function TopBarRightSection() {

    const [ShowSettingModal, setShowSettingModal] = useState(false)
    const {ShowMobileMenu, setShowMobileMenu} = NavigationStore()
    
    return (
        <div className='w-1/2 flex justify-end'>
            {
                ShowMobileMenu 
                ?   <Icon 
                        icon={<CgClose />} 
                        className={`
                            block lg:hidden
                            text-3xl 
                            mx-2 
                            hover:cursor-pointer
                        `}
                        onClick={() => setShowMobileMenu(false)}
                    />
                :   <Icon 
                        icon={<FiMenu />} 
                        className={`
                            block lg:hidden
                            text-3xl 
                            mx-2 
                            hover:cursor-pointer
                        `}
                        onClick={() => setShowMobileMenu(true)}
                    />
            }
            <Icon 
                icon={<FaUser />} 
                className={`
                    text-2xl 
                    my-auto
                    mx-2 lg:mx-4
                    hover:cursor-pointer
                `}
                onClick={() => setShowSettingModal(state => !state)}
            />
            {
                ShowSettingModal && <SettingModal />
            }
        </div>
    )
}

export default TopBarRightSection