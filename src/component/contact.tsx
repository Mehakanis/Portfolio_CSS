import styles from "../app/page.module.css";

export default function Contact(){
    return(
        <div className={styles.contact_container}>
            <div className={styles.contact_info}>
                <h3>{"Let's"} Connect
                </h3>
<p>{"I'm"} currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, {"I'll"} try my best to get back to you!

</p>

            </div>
            <div className={styles.contact_form}>
                <h2>Your email</h2>
                <p>jacob@google.com</p>
                <h2>Subject</h2>
                <p>Just saying hi</p>
                <h2>Message</h2>
                <p className={styles.m}>Lets talk about...</p>
                <div className={styles.send}>
                <h2 >Send Message</h2>
                </div>
            </div>
        </div>
    )
}