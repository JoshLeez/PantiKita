import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import "./styles/hoc.css"
import Navbar from "./Navbar";

const HOC = ({children, title = "Panti Kita"}) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         <div className="hoc-contaniner">
         <Navbar />
            {children}
            <Footer />
         </div>
      </>
   )
} 

export default HOC