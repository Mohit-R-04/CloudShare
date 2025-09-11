
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import Dashboard from './pages/dashboard.jsx'
import Upload from './pages/upload.jsx'
import Transaction from './pages/transaction.jsx'
import MyFiles from './pages/myfiles.jsx'
import PublicFileView from './pages/publicfileview.jsx'
import Subscription from './pages/subscription.jsx'
import './index.css'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={
        <>
        <SignedIn><Dashboard /></SignedIn>
        <SignedOut><RedirectToSignIn /></SignedOut>
        </>
        } 
        />
        <Route path="/upload" element={
        <>
        <SignedIn><Upload /></SignedIn>
        <SignedOut><RedirectToSignIn /></SignedOut>
        </>
        } />
        <Route path="/transaction" element={
        <>
        <SignedIn><Transaction /></SignedIn>
        <SignedOut><RedirectToSignIn /></SignedOut>
        </>
        } />
        <Route path="/myfiles" element={
        <>
        <SignedIn><MyFiles /></SignedIn>
        <SignedOut><RedirectToSignIn /></SignedOut>
        </>
        } />
        <Route path="/publicfileview" element={<PublicFileView />} />
        <Route path="/subscription" element={
          <>
          <SignedIn><Subscription /></SignedIn>
          <SignedOut><RedirectToSignIn /></SignedOut>
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App