import Image from "next/image"
import styles from "../app/page.module.css";



export default function About(){
    return(
        <div className={styles.about}>
        <div>
<Image src="/About.jpg" alt="" width={400} height={400} />
        </div>
        <div>
            <h1>About Me</h1>
            <p>I am Mehak Anis, a passionate Full-Stack Web Developer with a solid background in both frontend and backend technologies. My journey in web development has equipped me with skills in HTML5, CSS3, TypeScript, Tailwind CSS, React.js, and Next.js. I am dedicated to creating efficient and user-friendly web applications, and I continuously seek opportunities to enhance my knowledge in emerging fields like Generative AI and Cloud Computing. My commitment to excellence drives me to deliver high-quality solutions and stay ahead in a constantly evolving tech landscape.


</p>
<div className={styles.info}>
<div className={styles.skill}>
    <h3>Skills</h3>
    <ul className={styles.skul}>
    <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next.js</li>
    </ul>
</div>
<div>
    <h3 className={styles.ed}>Education</h3>
    <ul className={styles.edul} >
          <li>Cloud Applied Generative AI Engineer</li>
        </ul>
</div>
<div>
    <h3 className={styles.cer}>Certificate</h3>
    <ul className={styles.cerul}>
          <li>Freelancing Certificate from DigiSkills</li>
          <li>Search Engine Optimization Certificate from DigiSkills</li>
        </ul>
</div>
</div>
</div>
</div>
    )
}