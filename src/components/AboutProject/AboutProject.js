import React from "react";

function AboutProject () {
    return (
        <section id="about-project" className="project">
            <div className="content-wrapper">
                <h2 className="section-title">О проекте</h2>
                <div className="project__wrapper">
                    <div>
                        <h3 className="project__description">Дипломный проект включал 5 этапов</h3>
                        <p className="project__about">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div>
                        <h3 className="project__description">На выполнение диплома ушло 5 недель</h3>
                        <p className="project__about">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="project__track">
                    <div className="project__progress">
                        <div className="project__backend">1 неделя</div>
                        <p className="project__caption">Back-end</p>
                    </div>
                    <div className="project__progress">
                        <div className="project__frontend">4 недели</div>
                        <p className="project__caption">Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;