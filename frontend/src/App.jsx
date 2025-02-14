import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {

  return (
    <>
      <nav className='max-w-4xl mx-auto py-4'>
        <Header/>
      </nav>
      <main className='min-h-screen max-w-4xl mx-auto py-4'>
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
