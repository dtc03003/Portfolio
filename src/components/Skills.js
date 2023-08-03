/* css import */
import style from "./../styles/Skills.module.css";
import html from "./../logo/html.svg";
import css from "./../logo/css-icon.svg";
import js from "./../logo/js.png";
import react from "./../logo/react.png";
import java from "./../logo/java.svg";
import git from "./../logo/github.svg";
import markdown from "./../logo/markdown.png";
import vue from "./../logo/vue.png";
import redux from "./../logo/redux.jpeg";
import spring from "./../logo/spring.png";
import spring_boot from "./../logo/spring_boot.png";
import node from "./../logo/nodejs.png";
import koa from "./../logo/koa.png";
import express from "./../logo/express.png";
import mysql from "./../logo/mysql.png";
import mongodb from "./../logo/mongodb.png";
import ec2 from "./../logo/ec2.png";
import ubuntu from "./../logo/ubuntu.png";
import jira from "./../logo/jira.png";

const Skills = () => {
    return (
        <div className={style.Skills} id="Skills">
            <div className={style.inner}>
                <h1>📚Tech stack📚</h1>
                <div className={style.Main}>
                    <h1>📕Used as the main</h1>
                    <div className={style.skills}>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${html})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${css})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${js})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${react})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${java})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${git})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${markdown})` }}
                        ></div>
                    </div>
                </div>
                <div className={style.Sub}>
                    <h1>📒Used at least once</h1>
                    <div className={style.skills}>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${vue})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${redux})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${spring})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${spring_boot})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${node})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${koa})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${express})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${mysql})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${mongodb})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${ec2})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${ubuntu})` }}
                        ></div>
                        <div
                            className={style.skill}
                            style={{ backgroundImage: `url(${jira})` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
