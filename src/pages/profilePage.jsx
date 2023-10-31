import PageLayout from "../components/PageLayout/pageLayout";
import HeaderMain from "../components/headerMain/headerMain";

export default function ProfilePage(){
    return(
        <PageLayout>
            <HeaderMain title='Profile' user='Juan' />
        </PageLayout>
    )
}