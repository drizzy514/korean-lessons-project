import { Link } from "react-router-dom";
import "./Register.scss";


// images
import personImg from "../../components/Lib/png/b6224225ecae92b4ab46f2bce0aded4e5015b4da-removebg-preview 1.png"

function Register () {
    return <>
      
            <section className="signup-page">
                    <div className="signup-page__form">
                        <h1 className="signup-page__title">  Ro’yxatdan o’ting </h1>
                        <form action="/" method="POST" className="form">
                            <input className="name" type="text " placeholder="Ism" />
                            <input className="name" type="email" placeholder="email" />
                            <input className="name"  type="password" placeholder="Parol" />
                            <input className="name" type="password" placeholder="Parolni qayta kiriting" />
                            <button type="button" className="signup-page__btn">Ro’yxatdan o’tish</button>
                        </form>
                        <Link to="/login" className="signup-page__login-link">Login</Link>
                    </div>
                  
                    <div className="signup-page__content">
                        <h2 className="signup-page__content-title">Bizga qo’shiling</h2>
                             <p>Video kurslar faqat siz uchun</p>
                        <img width="542" height="514" src={personImg} alt="banner"/>
                    </div>
            </section>
        
    </>
}

export default Register