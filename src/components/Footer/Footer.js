import { Link } from "react-router-dom";
import "./Footer.scss";

// icons
import instIcon from "../Lib/png/inst-icon.png";
import telegramIcon from "../Lib/png/telegram-icon.png";
import youtubeIcon from "../Lib/png/youtube-icon.png";



function Footer () {

    return <>

        <footer className="footer">
            <div className="footer__content">
                <h2 className="footer__title">Logo name</h2>
                <ul className="footer__list">
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">Darslar</p>
             
                       </Link>
                              </li>
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">Topik darslar</p>
       
                       </Link>
                                    </li>
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">Topik testlar</p>
       
                       </Link>
                                    </li>
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">Test</p>
                
                       </Link>
                           </li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">Cansalting</p>
          
                       </Link>
                                 </li>
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title"> Kitoblar</p>
           
                       </Link>
                                </li>
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">O’quv markazlar </p>
    
                       </Link>
                                       </li>
                    <li className="footer__list-item">
                       <Link to="/" className="footer__item-link">
                            <p className="footer__item-title">Kurslarni sotib olish</p>
                       </Link>

                    </li>
                </ul>
                <div className="footer-contact">
                    <div className="footer-contact__social">
                        <p className="footer-contact__social-title">문의하기 <br/> Biz bilan bog’laning</p>

                        <ul className="footer__social-media">
                            <li className="footer__social-item">
                                <Link to="/" ><img src={instIcon} alt="instagram-icon" /></Link>
                            </li>
                            <li className="footer__social-item">
                                <Link to="/" ><img src={telegramIcon} alt="telegram-icon" /></Link>
                            </li>
                            <li className="footer__social-item">
                                <Link to="/" ><img src={youtubeIcon} alt="youtube-icon" /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-contact__location-number">
                                <p className="footer-contact__title">O’quv markaz</p>
                            <p className="location">Toshkent sh. Yunusobod <br/> Markaz-5  77 uy</p>
                            <p className="numbers">(+998) 94 9346212</p>
                            <p className="numbers">(+998) 94 9346212</p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="footer-end">
            <h3 className="footer-end__title">Copyright © 2021 Weglot All rights reserved</h3>
        </div>
    </>

}
export default Footer