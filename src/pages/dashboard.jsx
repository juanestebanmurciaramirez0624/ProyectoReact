import Navbar from '../components/navbar/navbar'
import Header from '../components/header/header'
import HeaderMain from '../components/header-main/headerMain'
import Card from '../components/card/card'
import TableDashboard from '../components/tableDashboard/tableDashboard'

export default function Dashboard(){
    return(
        <div id="dark">
                <Navbar />
                <div className="content">
                    <Header />
                    <main>
                        <HeaderMain />
                        <Card />
                        <TableDashboard />
                    </main>
                </div>
        </div>
    )
}