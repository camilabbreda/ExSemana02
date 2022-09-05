import './index.css'



import SideBar from '../Components/SideBar/SideBar'
import MainContent from '../Components/MainContent/MainContent'

export default function Home() {
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