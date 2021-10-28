import "./Cansalting.scss";

// korean-institute-img
import firstInstitute from "../Lib/png/tumblr_md45kiJaWR1qkyzm3o1_1280 1.png";
import secondInstitute from "../Lib/png/aadmqy 1.png";
import threeInstitute from "../Lib/png/2c01aa19f05e12495c8ad4b09755dfef 1.png";
import fourthInstitute from "../Lib/png/study-in-south-korea-Sogang-university 1.png";
import fiveInstitute from "../Lib/png/institute-img.png";



function Cansalting () {

    return <>
        <section className="cansalting-section">
            <h2 className="cansalting-section__title">Cansalting</h2>
            <p className="cansalting-section__text">Koreada taqsil olishni istaysizmi? Shoshiling bizda joylar soni juda oz</p>
            <ul className="cansalting-list">
                <li className="cansalting-list__item">
                    <div className="cansalting-list__item-img">
                        <img src={firstInstitute} alt="institute"/>

                    </div>
                    <div className="cansalting-item__desc">
                        <h3 className="item-title">Universitet name</h3>
                        <p className="item-text">Magistratura</p>
                    </div>
                </li>
                <li className="cansalting-list__item">
                    <div className="cansalting-list__item-img">
                        <img src={secondInstitute} alt="institute" />

                    </div>
                    <div className="cansalting-item__desc">
                        <h3 className="item-title">Universitet name</h3>
                        <p className="item-text">Magistratura</p>
                    </div>
                </li>
                <li className="cansalting-list__item">
                    <div className="cansalting-list__item-img">
                        <img src={threeInstitute} alt="institute"  />

                    </div>
                    <div className="cansalting-item__desc">
                        <h3 className="item-title">Universitet name</h3>
                        <p className="item-text">Magistratura</p>
                    </div>
                </li>
              </ul>
            
              <ul className="cansalting-list">
              <li className="cansalting-list__item">
                    <div className="cansalting-list__item-img">
                         <img src={fourthInstitute} alt="institute"  />
                    </div>
                    <div className="cansalting-item__desc">
                        <h3 className="item-title">Universitet name</h3>
                        <p className="item-text">Magistratura</p>
                    </div>
                </li>
                <li className="cansalting-list__item">
                    <div className="cansalting-list__item-img">
                        <img src={fiveInstitute} alt="institute"  /> 
                    </div>
                    <div className="cansalting-item__desc">
                        <h3 className="item-title">Universitet name</h3>
                        <p className="item-text">Magistratura</p>
                    </div>
                </li>
            </ul>
            <button type="button" className="cansalting-section__btn">Barchasi</button>
        </section>

    </>

}
export default Cansalting