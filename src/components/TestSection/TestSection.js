import "./TestSection.scss";


function TestSection () {

    return <>
        <section className="test-content">
            <h2 className="test-content__title">Test</h2>
            <p>O’z bilimingizni sinab ko’ring va bizning yangi chegirmalarimizni yutib oling.</p>
            <ul className="test-content__list">
                <li className="test-content__list-item">
                    <div className="item-card">
                        <h3 className="item-card__title">초급</h3>
                        <p className="item-card__desc">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                        <button type="button" className="item-card__btn">Boshlash</button>
                    </div>
                </li>
                <li className="test-content__list-item">
                    <div className="item-card">
                        <h3 className="item-card__title">중급</h3>
                        <p className="item-card__desc">Buy  your medicines with our mobile application with a simple delivery system</p>
                        <button type="button" className="item-card__btn">Boshlash</button>
                    </div>
                </li>
                <li className="test-content__list-item">
                    <div className="item-card">
                        <h3 className="item-card__title">고급</h3>
                        <p className="item-card__desc">Free consultation with our trusted doctors and get the best recomendations</p>
                        <button type="button" className="item-card__btn">Boshlash</button>
                    </div>
                </li>
            </ul>
        </section>

    </>

}
export default TestSection