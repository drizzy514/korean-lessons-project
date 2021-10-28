import "./KoreanBooks.scss";


// images
import koreanBook from "../Lib/png/image 39.png"

function KoreanBooks () {

    return <>

        <section className="korean-books">
            <div className="korean-books__desc">
                <h2 className="korean-books__title">책 <br/> Kitoblar</h2>
                <p className="korean-books__text">Our dedicated patient engagement app and 
                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                    or administrative hassle) and securely</p>
                <button className="korean-books__btn">Sotib olish</button>
            </div>
            <div className="korean-books__img">
                <img src={koreanBook} alt="book" />
            </div>
        </section>
    </>

}
export default KoreanBooks