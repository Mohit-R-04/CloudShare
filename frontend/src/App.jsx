
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import Dashboard from './pages/dashboard.jsx'
import Upload from './pages/upload.jsx'
import Transaction from './pages/transaction.jsx'
import MyFiles from './pages/myfiles.jsx'
import PublicFileView from './pages/publicfileview.jsx'
import Subscription from './pages/subscription.jsx'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/myfiles" element={<MyFiles />} />
        <Route path="/publicfileview" element={<PublicFileView />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App