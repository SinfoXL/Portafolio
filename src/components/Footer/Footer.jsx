
import '../Footer/Footer.css'

import githubLogo from '../../assets/LogosFooter/github.png'
import linkedinLogo from '../../assets/LogosFooter/linkedin.png'
import twitterLogo from '../../assets/LogosFooter/twitter.png'

export default function Footer(){
    return(
    <div className='footer-container'>
        <ul>
            <li><a id='cv' href="">CV</a></li>
            <li><a href=""><img src={githubLogo} alt="" /></a></li>
            <li><a href=""><img src={linkedinLogo} alt="" /></a></li>
            <li><a href=""><img src={twitterLogo} alt="" /></a></li>
        </ul>
    </div>
    )
}