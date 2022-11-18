import { Helmet } from "react-helmet-async";
import "./styles/hoc.css";

const HOC = ({children, title = "Panti Kita"}) => {
   return (
      <>
         <Helmet>
            <title>{title}</title>
         </Helmet>
            {children}
      </>
   )
} 

export default HOC