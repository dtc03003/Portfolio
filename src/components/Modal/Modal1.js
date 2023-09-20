import style from "./../../styles/Project.module.css";
import React, { useState } from "react";
import Modal from "react-modal";
import ModalStyle from "../../styles/ModalStyle";

import img from "../../img/포토폴리오.png";

// 캐러셀
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./data1";

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
                    <h1>포트폴리오</h1>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>간단소개</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>포트폴리오</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>개발기간</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>23.07 ~ 23.08</p>
                    </div>
                </div>
                <div className={style.simple_intro}>
                    <div className={style.simple_label}>
                        <p>기술</p>
                    </div>
                    <div className={style.simple_contents}>
                        <p>#react</p>
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
                // portalClassName="out_modal"
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
                                <h1>포트폴리오</h1>
                            </div>
                            <div className={style.inner_intro}>
                                <div className={style.main_description}>
                                    포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 이
                                    웹사이트에 해당합니다. <br />
                                    <br /> 이론으로만 알았던 HTML, CSS, JavaScript, React 등을
                                    실제로 웹사이트를 제작하면서 심도있게 다뤘습니다. 반응형 웹을
                                    만들어 스마트폰에서 접속 했을때를 고려하였으며 특히 CSS 실력이
                                    많이 늘었다고 생각하는 프로젝트 입니다.
                                </div>
                                <div className={style.sub_description}>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>주요 기능</div>
                                        <div className={style.projects_value}>
                                            자기소개, 인적 사항, 기술 스택, 프로젝트 경험, GitHub &
                                            블로그 & 이메일 &카카오톡 주소 링크
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>FrontEnd</div>
                                        <div className={style.projects_value}>React, jQuery</div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>GitHub</div>
                                        <div className={style.projects_value}>
                                            <a href="https://github.com/dtc03003/Portfolio">
                                                https://github.com/dtc03003/Portfolio
                                            </a>
                                        </div>
                                    </div>
                                    <div className={style.description}>
                                        <div className={style.projects_label}>URL</div>
                                        <div className={style.projects_value}>
                                            <a href="https://dtc03003.github.io/Portfolio/">
                                                https://dtc03003.github.io/Portfolio/
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
