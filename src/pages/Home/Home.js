import Cansalting from "../../components/Cansalting/Cansalting"
import Content from "../../components/Content/Content"
import Footer from "../../components/Footer/Footer"
import KoreanBooks from "../../components/KoreanBooks/KoreanBooks"
import TestSection from "../../components/TestSection/TestSection"
import TopikLessons from "../../components/TopikLessons/TopikLessons"
import VideoLessons from "../../components/VideoLessons/VideoLessons"
import "./Home.scss"


function Home () {
        return <>
        <div className="container" >
                <Content />
                <VideoLessons />
                <TestSection />
                <TopikLessons />
                <Cansalting />
                <KoreanBooks />
        </div>
                <Footer />
         </>
}
export default Home