import React from 'react'
import styles from "./HelpCenter.module.css"
import Link from 'next/link'

const HelpCenter = () => {

  const helpCenter = [
    {
      name: "about",
      link: "about"
    },
    {
      name: "Contact",
      link: "contact"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Subscription",
      link: "subscription"
    },
  ];

  return (
    <div className={styles.box}>
      {
        helpCenter.map((el, i) => (
          <div key={i+1} className={styles.helpCenter}>
            <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
          </div>
        ))
      }

    </div>
  )
}

export default HelpCenter
