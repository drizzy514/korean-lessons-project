import "./TopikLessons.scss";




// icons
import firstPreview from "../Lib/png/2-removebg-preview 1.png"
import secondPreview from "../Lib/png/1-removebg-preview 1.png"
import threePreview from "../Lib/png/3-removebg-preview 1.png"

function TopikLessons () {

    return <>
        <section className="topik-lessons">
            <h2 className="topik-lessons__title">토픽 수업 <br/>  TOPIK darslar</h2>
            <ul className="topik-lessons__list">
                <li className="topik-lessons__list-item">
                       <img src={firstPreview} alt="2-removebg-preview 1"/>
                                <span className="korean-title">초급</span>
                        <h3 className="topik-lessons__item-title">  Boshlang’ich daraja  </h3>
                </li>
                <li className="topik-lessons__list-item">
                        <img src={secondPreview} alt="1-removebg-preview 1" />
                            <span className="korean-title">중급</span>
                        <h3 className="topik-lessons__item-title">  O’rta daraja   </h3>
                </li>
                <li className="topik-lessons__list-item">
                        <img src={threePreview} alt="3-removebg-preview 1" />
                            <span className="korean-title">고급</span>
                        <h3 className="topik-lessons__item-title">  Yuqori daraja </h3>
                </li>
            </ul>
        </section>

    </>

}
export default TopikLessons