import "./Content.scss"


// background-image
import contentBg from "../Lib/png/Pre-Sessional-English-International-Foundation-Group-removebg-preview 1.png"


function  Content () {
    return <>
           <main>
               <section className="content-section ">
                   <div className="content-section__desc">
                        <h1 className="content-section__title-korean">온라인 교과서</h1>
                        <h1 className="content-section__title-uzbek">Online darslarimiz sizni qiziqtiradi</h1>
                        <p className="content-section__text">Trafalgar provides progressive, and affordable 
                            healthcare, accessible on mobile and online 
                            for everyone
                        </p>
                        <button className="content-section__btn">Consult today</button>
                   </div>
                   <div className="content-background">
                        <img width="839" height="413" src={contentBg} alt="Pre-Sessional-English-International-Foundation-Group-removebg-preview" />
                   </div>
               </section>
           </main>
     </>

}

export default Content