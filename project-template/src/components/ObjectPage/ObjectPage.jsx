import Header from "../Main/Header";
import Footer from "../Main/Footer";

import styles from "../../styles/ObjectPage/objectpage.module.css"

const ObjectPage = () => {
  return (
    <div>
        <div className={styles.main}>
            {/* страница объекта */}
            <Header />
            <h1>страница объекта</h1>

        </div>
        <Footer />
    </div>
  );
};

export default ObjectPage;