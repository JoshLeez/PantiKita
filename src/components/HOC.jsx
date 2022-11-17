import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import "./styles/hoc.css"
import Navbar,{Navbars} from "./Navbar";


const HOC = ({children, title = "Panti Kita", status=false}) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         {status ?  <Navbars />: <Navbar/>  }
         <div className="hoc-contaniner">
            {children}
         </div>
         <Footer />
      </>
   )
} 

export default HOC