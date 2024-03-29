import { Routes, Route } from 'react-router-dom';

import { Home } from './_root/pages';

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
// import { Toaster } from "@/components/ui/toaster";

import './globals.css';


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<SigninForm />} />
          <Route path='sign-up' element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>


        {/* private routes
        <Route index element={<Home />}/> */}


      </Routes>
    </main>
  )
}

export default App