import React from 'react';
import styles from './SectionLinks.module.css';

const Sectionlinks = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>LINK-URI UTILE</h3>
            <ul className={styles.list}>
              <li><a href="#">Acasa</a></li>
              <li><a href="#">Despre noi</a></li>
              <li><a href="#">Domenii</a></li>
              <li><a href="#">Echipa</a></li>
              <li><a href="#">Citate STUDEM</a></li>
              <li><a href="#">Transparentă</a></li>
              <li><a href="#">Finanțatori</a></li>
              <li><a href="#">Parteneri</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>CONTACTE</h3>
            <ul className={styles.list}>
              <li>Strada Alexandr Puskin 19, etajul 3</li>
              <li>Moldova</li>
              <li>Bălți</li>
              <li>Telefon: +373 (60) 229996 - Constantin Curca</li>
              <li>Telefon: +373 (79) 971786 - Ioan-Giuliano Ciomschi</li>
              <li>Email: youth.center@studem.md</li>
              <li>Email: studem.balti@gmail.com</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Despre noi</h3>
            <p>Centrul de Tineret STUDEM este o structură de auto guvernanță a tinerilor din municipiul Bălți înființată în cadrul unui parteneriat Moldo-Danez de lungă durată. Scopul de bază al Centrului este consolidarea democrației în Republica Moldova prin deprinderea cu principiile democratice în rândul tinerilor</p>
            <ul className={styles.socialIcons}>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Sectionlinks;
