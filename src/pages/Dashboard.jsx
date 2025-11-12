
import { use, useEffect } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { useAuth } from "@clerk/clerk-react";

const Dashboard=()=>{
  
  const{getToken}=useAuth();
  useEffect(() => {
    const displayToken = async()=>{
      const token = await getToken();
      console.log("Clerk Token:", token);
    }
    displayToken();
  }, []);




  return (
    <DashboardLayout activeMenu="Dashboard">
      <div>
        Dashboard Content {/* 🔧 FIX: DashBoard → Dashboard */}
      </div>
    </DashboardLayout>
  );
}
export default Dashboard;