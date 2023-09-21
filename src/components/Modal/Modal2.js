import style from "./../../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";

import img from "../../img/게시판.png";

// 캐러셀
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./data2";

// 캐러셀
const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
));

const Modal1 = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <div
            className={style.project}
            onClick={() => {
                setModalIsOpen(true);
            }}
        >
            <div className={style.out_img} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={style.out_intro}>
                <div className={style.out_title}>
                    <h1>게시판</h1>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>간단소개</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>게시판</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>개발기간</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>23.04 ~ 23.05</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>기술</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>#react #Node.js #MongoDB #EC2</p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={(event) => {
                    setModalIsOpen(false);
                    event.stopPropagation(); // 이벤트 버블링 방지
                }}
                style={ModalStyle}
            >
                <div className={style.modal}>
                    <div className={style.modal_inner}>
                        <div className={style.img}>
                            <div className={style.inner_img}>
                                <Carousel
                                    showArrows={true}
                                    showStatus={false}
                                    showThumbs={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    selectedItem={imageData[currentIndex]}
                                    onChange={handleChange}
                                    width="100%"
                                >
                                    {renderSlides}
                                </Carousel>
                            </div>
                        </div>
                        <div className={style.intro}>
                            <div className={style.title}>
                                <h1>게시판</h1>
                            </div>
                            <div className={style.inner_intro}>
                                <div className={style.main_description}>
                                    jwt을 이용한 로그인 및 회원가입, 웹 페에지의 기초라고 할 수 있는
                                    게시판의 CRUD 기능을 구현해보고 amazon에서 서비스하는 EC2를
                                    이용하여 배포, 도메인 구매 후 적용 등 프론트엔드와 백엔드 모두
                                    구현해 웹개발의 다양한 측면을 경험할 수 있는 좋은 기회였습니다.
                                </div>
                                <div className={style.sub_description}>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>주요 기능</div>
                                        <div className={style.projects_value}>
                                            회원가입, 로그인, 글 등록, 수정, 삭제, 태그 기능
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>FrontEnd</div>
                                        <div className={style.projects_value}>
                                            React, Redux, jQuery
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>BackEnd</div>
                                        <div className={style.projects_value}>Node.js, Koa</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>DataBase</div>
                                        <div className={style.projects_value}>MongoDB</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>Deployment</div>
                                        <div className={style.projects_value}>AWS(EC2)</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>GitHub</div>
                                        <div className={style.projects_value}>
                                            <a href="https://github.com/dtc03003/blog">
                                                https://github.com/dtc03003/blog
                                            </a>
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>URL</div>
                                        <div className={style.projects_value}>
                                            <a href="http://meerkatstudy.store/">
                                                http://meerkatstudy.store/
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Modal1;
