import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HOC = ({children, title = "Panti Kita"}) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
         <div>
            <Navbar />
            {children}
            <Footer />
         </div>
      </>
   )
}

export default HOC