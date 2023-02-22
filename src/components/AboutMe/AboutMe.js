import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import student from '../../images/student.png';

function AboutMe () {
    return (
        <section className="student">
            <div className="content-wrapper">
                <h2 className="section-title">Студент</h2>
                <div className="student__wrapper">
                    <div>
                        <h3 className="student__name">Виталий</h3>
                        <p className="student__paragraph">Фронтенд-разработчик, 30 лет.</p>
                        <p className="student__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <p className="student__github">Github</p>
                    </div>
                    <img className="student__pic" src={student} alt="Фотография студента" />
                </div>
                <Portfolio />
            </div>
    </section>
    )
}

export default AboutMe;