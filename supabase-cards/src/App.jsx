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
    <div>:\
    <h1>USERS:</h1>
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

      <h1>FOOD:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>drop_line</th>
            <th>allergy</th>
            <th>mies_en_place</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
        {food.map((food) =>
          <tr key={food.food_id}>
              <td>{food.food_id}</td>
              <td>{food.name}</td>
              <td>{food.drop_line}</td>
              <td>{food.allergy}</td>
              <td>{food.mies_en_place}</td>
              <td>{food.type}</td>
          </tr>
        )} 
        </tbody>
      </table>
      <h1>BEVERAGES:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>spirit</th>
            <th>ingredients</th>
            <th>drop_line</th>
            <th>allergy</th>
          </tr>
        </thead>
        <tbody>
        {bevs.map((bevs) =>
          <tr key={bevs.id}>
              <td>{bevs.id}</td>
              <td>{bevs.name}</td>
              <td>{bevs.main_Spirit}</td>
              <td>{bevs.ingredients}</td>
              <td>{bevs.drop_line}</td>
              <td>{bevs.allergy}</td>
          </tr>
        )} 
        </tbody>
      </table>
    </div>
    
  )
}

export default App