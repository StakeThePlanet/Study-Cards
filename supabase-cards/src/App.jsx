import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { supabase } from './assets/createClient'

const App = () => {

  const [users, setUsers] =  useState([])

  useEffect(() => {
    fetchUsers()
  
  }, [])
  
  const [bevs, setBeverages] =  useState([])

  useEffect(() => {
    fetchbeverages()
  
  }, [])

  const [food, setFood] =  useState([])

  useEffect(() => {
    fetchfood()
  
  }, [])
  console.log(bevs, food, users)

  async function fetchUsers(){
    const {data} = await supabase
      .from('users')
      .select('*')
      setUsers(data)
    }

  async function fetchbeverages(){
    const {data} = await supabase
      .from('beverages')
      .select('*')
      setBeverages(data)
    }
  async function fetchfood(){
    const {data} = await supabase
      .from('food')
      .select('*')
      setFood(data)
    }
     

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Company ID</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) =>
          <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.job}</td>
              <td>{user.company}</td>
              <td>{user.company_id}</td>
          </tr>
        )} 
        </tbody>
      </table>
    </div>
  )
}

export default App