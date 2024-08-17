import style from "./Section.module.css"

export const Section = ({ children, title }) => {
   return (
      <section className={style.section}>
         <h2 className={style.title}>{title}</h2>
         {children}
      </section>)
}