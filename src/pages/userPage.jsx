import PageLayout from "../components/PageLayout/pageLayout";
import HeaderMain from "../components/headerMain/headerMain";
import Table from "../components/table/table";

export default function UserPage(){
    return(
        <PageLayout>
            <HeaderMain title='User' user='Juan' />
            <Table />
        </PageLayout>
    )
}