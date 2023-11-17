import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { supabase } from './assets/createClient'

const App = () => {

  const [user, setUsers] =  useState([])
  console.log(user)

  useEffect(() => {
    fetchUsers()
  
  }, [])
  

  async function fetchUsers(){
    const {data} = await supabase
      .from('users')
      .select('*')
      setUsers(data)
    }


  return (
    <div>App</div>
  )
}

export default App