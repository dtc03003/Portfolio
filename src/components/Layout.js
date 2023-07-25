/* css import */
import style from "./../styles/Layout.module.css";

/* css import */
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className={style.layout}>
            <Header />
            <Contents />
            <Footer />
        </div>
    );
};

export default Layout;
