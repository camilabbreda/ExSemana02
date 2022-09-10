// import { useState } from 'react'
// import { useTipReducer } from "../Reducers/app-reducer"


import './index.css'

import SideBar from '../Components/SideBar/SideBar'
import MainContent from '../Components/MainContent/MainContent'

export default function Home() {

    // const [state, dispatch] = useTipReducer();
    // const { tipList } = state
    // console.log("tiplist:" + JSON.stringify(tipList))
    return (
        <div>
            <div>
                <div className="corpo">
                    <SideBar/>
                    <MainContent/>
                </div>
            </div>
        </div>
    );
}