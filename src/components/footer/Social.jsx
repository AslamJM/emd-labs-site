import React from 'react'
import * as styles from '../../styles/footer/social.module.scss'
import {GrFacebook,GrTwitter,GrInstagram,GrLinkedin} from 'react-icons/gr'

const Social = () => {
  return (
    <div className={styles.social}>
        <div className={styles.socialIcons}>
            <p>Follow Us</p>
            <div className={styles.socialIconsContainer}>
              <div className={styles.iconbox}><a href="https://www.facebook.com/emdlabs/" target="_blank" rel="noopener norefferer"><GrFacebook className={styles.icons}/></a></div>
              <div className={styles.iconbox}><a href="https://twitter.com" target="_blank" rel="noopener norefferer"><GrTwitter className={styles.icons}/></a></div>
              <div className={styles.iconbox}><a href="https://instagram.com" target="_blank" rel="noopener norefferer"><GrInstagram className={styles.icons}/></a></div>
              <div className={styles.iconbox}><a href="https://www.linkedin.com/company/emdlabs/?originalSubdomain=lk" target="_blank" rel="noopener norefferer"><GrLinkedin className={styles.icons}/></a></div>
            </div>
        </div>
    </div>
  )
}

export default Social