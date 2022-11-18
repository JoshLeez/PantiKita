import "./styles/input.css"
import { PhotoPlus } from "tabler-icons-react";

const InputLong = ({children, ...props }) => {
   return (
      <>
         <div className="wrapper-input-long">
            <label htmlFor={props.name}>{props.text}</label>
            <div className="input-long">
               {children}
               <input {...props}/>
            </div>
         </div>
      </>
   )
}

export const InputMedium = ({children, ...props }) => {
   return (
      <>
         <div className="wrapper-input-medium">
            <label htmlFor={props.name}>{props.text}</label>
            <div className="input-medium">
               {children}
               <input {...props}/>
            </div>
         </div>
      </>
   )
}

export const InputPhoto = ({...props}) => {
   return (
      <>
         <div className="input-photo">
            <input type="file" {...props}/>
            <PhotoPlus size={32} color="#3AB7FE" strokeWidth={3}/>
         </div>
      </>
   )
}

export const InputDescription = ({...props}) => {
   return (
      <>
         <div className="input-description">
            <textarea {...props}></textarea>
         </div>
      </>
   )
}

export default InputLong;