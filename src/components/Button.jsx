import "./styles/button.css";

export const Button = ({children, type, ...props}) => {
   const BUTTON_TYPE = {
      PRIMARY : "button-primary",
      SECONDARY : "button-secondary",
      DONASI : "button-donasi",
      RELAWAN : "button-relawan",
      MD_TUTUP : "button-medium-tutup",
      MD_BUKA_DONASI : "button-medium-buka-donasi",
      MD_BUKA_RELAWAN : "button-medium-buka-relawan",
      MD_SIMPAN : "button-medium-simpan",
      SM_SIMPAN : "button-small-simpan",
      SM_EDIT : "button-small-edit",
      SM_DELETE : "button-small-delete",
      SM_CREATE : "button-small-create",
      EDIT : "button-edit",
      DELETE : "button-delete",
      CREATE : "button-create"
   }

   const typeClassName = BUTTON_TYPE[type || "PRIMARY"]

   return (
      <>
         <button className={typeClassName} {...props}>
            {children}
         </button>
      </>
   )
}

export default Button;
