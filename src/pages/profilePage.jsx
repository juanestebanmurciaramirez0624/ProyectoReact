import PageLayout from "../components/PageLayout/pageLayout";
import SignUp from "../components//signup/signUp";
import { Toaster } from "sonner";

export default function ProfilePage(){
    return(
        <PageLayout>
            <SignUp />
            <Toaster richColors/>
        </PageLayout>
    )
}