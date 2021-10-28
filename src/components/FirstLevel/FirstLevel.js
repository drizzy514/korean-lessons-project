import "./FirstLevel.scss"

// img
import studentimg from "../Lib/png/student-4311732_1280-removebg-preview 1.png"



function FirstLevel () {
        return <>
            <section className="first-level">
                <div className="first-level__student-img">
                    <img src={studentimg} alt="student-4311732_1280-removebg-preview 1" />
                </div>
                <div className="first-level__desc">
                    <div className="first-level__title">
                            <span className="korean-title">초급  </span>
                            <h3 className="first-level__title-uzbek">  Boshlang’ich daraja</h3>
                    </div>
                    <p className="first-level__desc">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver </p>
                    <button type="button" className="first-level__btn">Boshlash</button>
                </div>
            </section>
    </>
}
export default FirstLevel