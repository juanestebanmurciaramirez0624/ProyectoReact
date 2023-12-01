import PageLayout from "../components/PageLayout/pageLayout";
import { Toaster } from "sonner";
import UpdateData from "../components/UpdateData/updateData";

export default function ProfilePage(){
    return(
        <PageLayout>
            <UpdateData />
            <Toaster richColors/>
        </PageLayout>
    )
}