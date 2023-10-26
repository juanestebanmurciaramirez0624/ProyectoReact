import PageLayout from '../components/PageLayout/pageLayout'
import HeaderMain from "../components/headerMain/headerMain";
import Card from '../components/card/card'
import TableDashboard from '../components/tableDashboard/tableDashboard'

export default function DashboardPage(){
    return(
        <PageLayout>
            <HeaderMain title='Dashboard' user='Juan' />
            <Card />
            <TableDashboard />
        </PageLayout>
    )
}