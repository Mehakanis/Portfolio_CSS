//import Header from "@/component/navbar";
import styles from "../app/page.module.css";
//import Footer from "@/component/footer";
import HeroSection from "@/component/heroSection";



export default function Home (){
  return(
    <main className={styles.main}>
      <div>
        
        {/* <Footer/> */}
        <HeroSection />
      </div>
    </main>
  )
}