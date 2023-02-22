import React from "react";

function Techs () {
    return (
        <section className="techs">
            <div className="content-wrapper">
                <h2 className="section-title">Технологии</h2>
                <div className="techs__wrapper">                        
                    <h3 className="techs__name">7 технологий</h3>
                    <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
                <ul className="techs__list">
                    <li className="techs__item">HTML</li>
                    <li className="techs__item">CSS</li>
                    <li className="techs__item">JS</li>
                    <li className="techs__item">React</li>
                    <li className="techs__item">Git</li>                        
                    <li className="techs__item">Express.js</li>
                    <li className="techs__item">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;