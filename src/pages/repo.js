import React from 'react'
import Sidebar from '../Components/Sidebar';
import RepositoryList from '../Components/RepositoryList';
const repo = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <RepositoryList />
    </div>
  )
}

export default repo