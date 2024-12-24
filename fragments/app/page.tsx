"use client";
import AuthDialog from "@/components/AuthDialog";
import { AuthViewType } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function Home() {
  const [authView , setAuthView] = useState<AuthViewType>("sign_in")
  const [isAuthDialog, setIsAuthDialog] = useState(true )
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="flex min-h-screen max-h-screen">
      {supabase && (<AuthDialog supabase={supabase} open={isAuthDialog} setOpen={()=>setIsAuthDialog(prev=> !prev)} view ={authView} />)}
      <div className="grid w-full md:grid-cols-2">

      </div>
    </div>
  );
}
