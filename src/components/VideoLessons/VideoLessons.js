import "./VideoLessons.scss";
import { Link, useRouteMatch ,Switch, Route } from "react-router-dom";



// components
import FirstLevel from "../FirstLevel/FirstLevel"
import SecondLevel from "../SecondLevel/SecondLevel"
import HighLevel from "../HighLevel/HighLevel"

function  VideoLessons () {
    let { url, path } = useRouteMatch()
    return <>
            
            <section className="video-lessons">
                <h2 className="video-lessons__title">비디오 수업 <br/>  Video darsliklar to’plami</h2>
                <ul className="video-lessons__list">
                    <li className="video-lessons__item">
                        <Link to={url} className="level-link">

                        <h3 className="item-title"> <span className="item-num"> 01 </span>초급  Boshlang’ich daraja </h3>
                        <p className="item-desc">Boshlang’ich darajadagilar uchun 
                                    darslar to’plami. Umumiy darslar 25 tani 
                                    tashkil qiladi.</p>
                        </Link>
                    </li>
                    <li className="video-lessons__item">
                        <Link to={`${url}/secondlevel`} className="level-link">
                        <h3 className="item-title"> <span className="item-num"> 02 </span> 중급 O’rta daraja</h3>
                        <p className="item-desc">O’rta Boshlang’ich darajadagilar uchun darslar to’plami. Umumiy darslar 25 tani tashkil qiladi.</p>
                        </Link>
                    </li>
                    <li className="video-lessons__item">
                    <Link to={`${url}/highlevel`} className="level-link">
                        <h3 className="item-title"> <span className="item-num"> 03 </span> 고급 Yuqori daraja</h3>
                        <p className="item-desc">Yuqori darajadagilar uchun 
                        darslar to’plami. Umumiy darslar 
                        25 tani tashkil qiladi.</p>
                        </Link>
                    </li>
                </ul>
                                <Switch>
                                   <Route exact path={path} component= {FirstLevel} />
                                   <Route path={`${path}/secondlevel`} component={SecondLevel}></Route>
                                   <Route path={`${path}/highlevel`} component={HighLevel}></Route>
                                </Switch>
            </section>
    </>
}

export default VideoLessons