import Navbar from '../components/navbar/navbar'
import Header from '../components/header/header'
import HeaderMain from '../components/header-main/headerMain'
import Card from '../components/card/card'
import TableDashboard from '../components/tableDashboard/tableDashboard'
import { useState } from 'react'

export default function Dashboard(){
    const [isNigthMode, setNigthMode] = useState(false)
    const nightMode = () => {
    setNigthMode(!isNigthMode)
    }
    return(
        <div className={isNigthMode ? 'dark' : ''}>
                <Navbar />
                <div className="content">
                    <Header nightMode={nightMode}/>
                    <main>
                        <HeaderMain />
                        <Card />
                        <TableDashboard />
                    </main>
                </div>
        </div>
    )
}