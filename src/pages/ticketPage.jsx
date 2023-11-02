import PageLayout from "../components/PageLayout/pageLayout";
import HeaderMain from "../components/headerMain/headerMain";
import TableTicket from "../components/tableTicket/tableTicket";

export default function TicketPage(){
    return(
        <PageLayout>
            <HeaderMain title='Ticket' user='Juan' />
            <TableTicket />
        </PageLayout>
    )
}