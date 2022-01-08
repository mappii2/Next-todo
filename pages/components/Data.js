import React, { useState, useEffect } from 'react'
import json from '../../public/data.json'

export const TodoList = React.createContext();

const Data = ({ children }) => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const value = {
    data,
    setData,
    count,
    setCount
  }

  useEffect(() => {
    setData(json);
  })

  return (
    <>
      <TodoList.Provider value={value}>
        {children}
      </TodoList.Provider>
    </>
  )
}
export default Data;