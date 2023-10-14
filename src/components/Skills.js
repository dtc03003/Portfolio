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

//Json data
import data from "./data.json";

const TextList = (props) => {
    return data.text.filter((v) => v.id === props);
};

const Skills = () => {
    return (
        <div className={style.Skills} id="Skills">
            <div className={style.inner}>
                <h1>📚Tech stack📚</h1>
                <div className={style.Main}>
                    <h1>📕Used as the main</h1>
                    <div className={style.skills}>
                        <Skill logo={html} data={data.data[0]} text={TextList(1)} />
                        <Skill logo={css} data={data.data[1]} text={TextList(2)} />
                        <Skill logo={js} data={data.data[2]} text={TextList(3)} />
                        <Skill logo={react} data={data.data[3]} text={TextList(4)} />
                        <Skill logo={java} data={data.data[4]} text={TextList(5)} />
                        <Skill logo={git} data={data.data[5]} text={TextList(6)} />
                        <Skill logo={markdown} data={data.data[6]} text={TextList(7)} />
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
