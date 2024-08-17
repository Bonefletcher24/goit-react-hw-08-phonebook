import style from "./ContactWrapper.module.css";

export const ContactWrapper = ({children}) => {
   return (
      <div className={style.contactWrapper}>
         {children}
      </div>
   )
}