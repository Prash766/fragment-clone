import { AuthViewType } from '@/lib/auth'
import { SupabaseClient } from '@supabase/supabase-js'
import React from 'react'

const AuthForm = ({
supabase,
view
}:{
    supabase : SupabaseClient
    view: AuthViewType

}) => {
  return (
    <div>
        <h1>
            Sign In 
        </h1>
        <div>
            
        </div>

    </div>
  )
}

export default AuthForm