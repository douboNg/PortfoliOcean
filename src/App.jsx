import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
      </Routes>
    </Layout>
  )
}

export default App