import Image from "next/image";
import styles from "../app/page.module.css";

export default function HeroSection(){
    return(
        <div className={styles.HeroSection}>
            <div>
                <h1>Hello {"I'm"} {" "} <br></br>Mehak</h1>
                <p>Web developer in progress with a strong foundation in HTML, CSS, 
                    <br></br>JavaScript, and Next.js, eager to take on new challenges.

</p>

            </div>
            <div >
            <Image
            src="/profile.png"
            alt="profile image"
            //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 rounded-full object-cover"
             width={300}
             height={300} 
             className={styles.image}/>
            </div>

        </div>
    )
}