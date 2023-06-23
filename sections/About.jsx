'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div variants={staggerContainer} initial="hidden"
      whileInView="show" viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

      <TypingText title="| Sobre Metaverso" textStyles="text-center" />


      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-secondary-white text-center">
        <span className="font-extrabold text-white">Metaverso</span> es algo nuevo en el futuro, donde puedes disfrutar del mundo virtual sintiendo que es realmente real, puedes sentir lo que sientes en este mundo de metaverso, porque esta es realmente la <span className="font-extrabold text-white">Locura del Metaverso</span> de hoy, usando solo dispositivos
        <span className="font-extrabold text-white"> VR </span>
        puede explorar fácilmente el mundo del metaverso que desea, convertir sus sueños en realidad.
        <span className="font-extrabold text-white"> Exploremos </span>
        la locura del metaverso desplazándonos hacia abajo
      </motion.p>
      <motion.img variants={fadeIn('up', ('tween'), 0.3, 1)}
        src="/arrow-down.svg" alt="Flecha Abajo" className="w-[18px] h-[28px] object-contain mt-[28px] cursor-pointer" />
    </motion.div>
  </section>
);

export default About;
