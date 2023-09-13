import styles from "./Footer.module.scss";

const date = new Date();
export const year = date.getFullYear();

const Footer = () => {
    return (
        <div className={styles.footer}>
            &copy; 27 INC, {year}. All Rights Reserved.
        </div>
    );
};

export default Footer;