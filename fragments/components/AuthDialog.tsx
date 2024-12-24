import { AuthViewType } from "@/lib/auth"
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import AuthForm from "./AuthForm"
import { DialogHeader } from "./ui/dialog"
import { SupabaseClient } from "@supabase/supabase-js"

const AuthDialog = ({
    open,
    setOpen,
    supabase,
    view
}:{
    open : boolean
    supabase : SupabaseClient
    setOpen : (value :boolean)=> void
    view : AuthViewType

}) => {
  return (
   <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Sign In App
            </DialogTitle>
        </DialogHeader>
        <AuthForm supabase={supabase} view={view}/>
    </DialogContent>
   </Dialog>
  )
}

export default AuthDialog