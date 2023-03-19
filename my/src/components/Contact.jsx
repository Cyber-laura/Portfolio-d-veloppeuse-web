import { Link, } from 'react-router-dom'
import { useState } from 'react';
import '../assets/styles/_Contact.scss'

function Contact() {
    const [emailVisible, setEmailVisible] = useState(false);
    const toggleEmailVisibility = () => {
        setEmailVisible(!emailVisible);
        if (!emailVisible) {
            document.getElementById("email-text").innerHTML = "brmd.laura@gmail.com";
        } else {
            document.getElementById("email-text").innerHTML = "Email";
        }
    }

    return (
        <div className="contact_container_div">
            <div className="contact_container_text">
                <div>
                    <p>N'hésitez pas à me contacter pour que l’on puisse échanger ensemble sur <strong>vos projets, vos attentes </strong> ou pour <strong>une opportunité professionnelle</strong>.</p>
                </div>
                <div>
                    <h2>Laura Brémaud</h2>
                </div>
                <div className="contact_container_svg">
                    <div onClick={toggleEmailVisibility} className="container_svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><title>Me contacter</title><path fill="#c1876f" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        <p id="email-text">Email</p>
                    </div>
                    <div className="container_svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><title>LinkedIn</title><path fill="#c1876f" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                        <Link to="https://www.linkedin.com/in/laura-br%C3%A9maud/">
                            <p>LinkedIn</p>
                        </Link>
                    </div>
                </div>
                <div className="contact_lien_cv">
                    <p>Vous pouvez également télécharger mon cv en cliquant <Link to="https://www.canva.com/design/DAE56zvMJXA/P4ZqVlv_5XBGDrGu9E9y2g/view?utm_content=DAE56zvMJXA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><strong>sur ce lien.</strong></Link> </p>
                </div>
            </div>
        </div>
    )
}
export default Contact;