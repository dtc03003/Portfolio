/* css import */
import style from "./../styles/Layout.module.css";

/* css import */
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

const Layout = () => {
    return (
        <main className={style.layout}>
            <Header />
            <Contents />
            <Footer />
        </main>
    );
};

export default Layout;
