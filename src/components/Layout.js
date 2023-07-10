/* css import */
import style from "./../styles/Layout.module.css";

/* css import */
import Header from "./Header";
import Contents from "./Contents";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div>
            여긴 레이아웃
            <Header />
            <div className={style.layout}>
                <Contents />
                <Sidebar />
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
