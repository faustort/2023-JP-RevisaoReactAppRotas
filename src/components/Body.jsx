import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Body() {
  return (
    <>
      <Header />
      {/* https://reactrouter.com/en/main/components/outlet  */}        
      <Outlet />
      <Footer />
    </>
  );
}
