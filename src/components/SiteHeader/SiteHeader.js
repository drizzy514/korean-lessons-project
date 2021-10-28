import { Link } from "react-router-dom"
import "./SiteHeader.scss"


function SiteHeader () {
        return <>
               <header className="header" >
                    <p className="header__logo">Logo name </p>
                    <ul className="header__list">
                        <li className="header__list-item">
                            <Link to="/" className="header__item-link" >
                                Darslar
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/" className="header__item-link" >
                                Topik
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/" className="header__item-link" >
                                Test
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/" className="header__item-link" >
                                Consalting
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/" className="header__item-link" >
                                Kitoblar
                            </Link>
                        </li>
                        <li className="header__list-item">
                            <Link to="/" className="header__item-link" >
                                To'lov
                            </Link>
                        </li>
                    </ul>   

                    <div className="header__auth">
                        <Link to="/login" className="header__login-link">Kirish</Link>
                        <Link to="/signup" className="header__signup-link">Registratsiya</Link>
                    </div>
                </header> 
         </>
}
export default SiteHeader