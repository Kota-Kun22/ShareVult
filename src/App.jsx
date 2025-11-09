import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";
import Subcription from "./pages/Subcription";
import Transactions from "./pages/Transactions";
import Uploads from "./pages/Uploads";

const App=()=>{
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/my-files" element={<MyFiles/>} />
        <Route path="/subcription" element={<Subcription/>} />
        <Route path="/transactions" element={<Transactions/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;