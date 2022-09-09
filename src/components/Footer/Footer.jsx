
import '../Footer/Footer.css'

import githubLogo from '../../assets/LogosFooter/github.png'
import linkedinLogo from '../../assets/LogosFooter/linkedin.png'
import twitterLogo from '../../assets/LogosFooter/twitter.png'

export default function Footer(){
    return(
    <div className='footer-container'>
        <ul>
            {/* <li><a id='cv' href="./downloads/CV.pdf" download='Hoja de vida Sebastian.pdf'>CV</a></li> */}
            <li><a href="https://github.com/TianDevNine" target='_blank'><img src={githubLogo} alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/sebastian-r%C3%ADos-garc%C3%ADa-92011a228/" target='_blank'><img src={linkedinLogo} alt="" /></a></li>
            <li><a href="https://twitter.com/tiandevnine" target='_blank'><img src={twitterLogo} alt="" /></a></li>
        </ul>
    </div>
    )
}