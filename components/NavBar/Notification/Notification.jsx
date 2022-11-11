import React from 'react'
import styles from "./Notification.module.css"
import Image from 'next/image'
import images from '../../../img';

const Notification = () => {
  return (
    <div className={styles.notification}>
      <p>Notification </p> 
      <div className={styles.notification_box}>
        <div className={styles.notification_box_img}>
          <Image src= {images.user1} alt="profile image" width={50} height={50} />
        </div>
        <div className={styles.notification_box_info}>
          <h4>Rahul</h4>
          <p>measure action your user...</p>
          <small> 3 minutes ago </small>
        </div>
        <span className={styles.notification_box_new}>  </span>
      </div>
    </div>
  )
}

export default Notification
