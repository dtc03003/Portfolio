/* css import */
import style from "./../styles/Skills.module.css";

// 로고
import html from "./../logo/html.svg";
import css from "./../logo/css.png";
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

// 로고 컴포넌트화
import Logo from "./logo";
import Skill from "./Skill";

const Skills = () => {
    return (
        <div className={style.Skills} id="Skills">
            <div className={style.inner}>
                <h1>📚Tech stack📚</h1>
                <div className={style.Main}>
                    <h1>📕Used as the main</h1>
                    <div className={style.skills}>
                        <Skill logo={html} name={"HTML"} gauge={50} />
                        <Skill logo={css} name={"CSS"} gauge={50} />
                        <Skill logo={js} name={"JavaScript"} gauge={50} />
                        <Skill logo={react} name={"React"} gauge={50} />
                        <Skill logo={java} name={"Java"} gauge={50} />
                        <Skill logo={git} name={"GIT"} gauge={50} />
                        <Skill logo={markdown} name={"MarkDown"} gauge={50} />
                    </div>
                </div>
                <div className={style.Sub}>
                    <h1>📒Used at least once</h1>
                    <div className={style.skills}>
                        <Logo logo={vue} />
                        <Logo logo={redux} />
                        <Logo logo={spring} />
                        <Logo logo={spring_boot} />
                        <Logo logo={node} />
                        <Logo logo={koa} />
                        <Logo logo={express} />
                        <Logo logo={mysql} />
                        <Logo logo={mongodb} />
                        <Logo logo={ec2} />
                        <Logo logo={ubuntu} />
                        <Logo logo={jira} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
