import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";

import Transactions from "./pages/Transactions";
import Uploads from "./pages/Uploads";
import { RedirectToSignIn, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";
import { UserCreditsProvider } from "./context/UserCreditsContext";
import Subscription from "./pages/Subscription";
import PublicFileView from "./pages/PublicFileView";

const App=()=>{
  return (
    <UserCreditsProvider>
   <BrowserRouter>
     <Toaster/>
      <Routes>

        <Route path="/" element={<Landing/>} />

        <Route path="/dashboard" element={
            <>
                <SignedIn><Dashboard/></SignedIn>
                <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />

        <Route path="/upload" element={
           <>
                <SignedIn><Uploads/></SignedIn>
                <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />

        <Route path="/my-files" element={
           <>
              <SignedIn><MyFiles/></SignedIn>
              <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />

        <Route path="/subscriptions" element={
           <>
              <SignedIn><Subscription/></SignedIn>
              <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />

        <Route path="/transactions" element={
            <>
              <SignedIn><Transactions/></SignedIn>
              <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />
        <Route path="/file/:fileId" element={
          <>
           <PublicFileView/>
          </>
        }/>

        <Route path="/*" element={<RedirectToSignIn/>} />

      </Routes>
   </BrowserRouter>
   </UserCreditsProvider>
  );
}

export default App;