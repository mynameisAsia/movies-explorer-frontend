import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import student from '../../images/student.jpg';

function AboutMe () {
    return (
        <section className="student">
            <div className="content-wrapper">
                <h2 className="section-title">Студент</h2>
                <div className="student__wrapper">
                    <div>
                        <h3 className="student__name">Азия</h3>
                        <p className="student__paragraph">Фронтенд-разработчик, 23 года.</p>
                        <p className="student__description">Я живу в Москве, закончила факультет лингвистики НГУ. Я люблю слушать музыку, а ещё увлекаюсь спортом. Недавно начала кодить. С лета 2022 года работаю в IT компании специалистом клиентской поддержки.</p>
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