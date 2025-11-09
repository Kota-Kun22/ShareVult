import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";
import Subcription from "./pages/Subcription";
import Transactions from "./pages/Transactions";
import Uploads from "./pages/Uploads";
import { RedirectToSignIn, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

const App=()=>{
  return (
   <BrowserRouter>
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

        <Route path="/subcription" element={
           <>
              <SignedIn><Subcription/></SignedIn>
              <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />

        <Route path="/transactions" element={
            <>
              <SignedIn><Transactions/></SignedIn>
              <SignedOut><RedirectToSignIn/> </SignedOut>
            </>
        } />

        <Route path="/*" element={<RedirectToSignIn/>} />

      </Routes>
   </BrowserRouter>
  );
}

export default App;