import React from 'react'
import { useState } from 'react'
import styles from "./SideBar.module.css"
import Link from 'next/link'
import  {GrClose} from 'react-icons/gr'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
import images from "../../../img"
import Button from "../../Button/Button"
import Image from 'next/image'

const SideBar = ({ setOpenSideMenu }) => {

  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Authon Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect-Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
  ];

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

  const openDiscoverMenu = () => {
    if(!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = () => {
    if(!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  }

  const closeSideBar = () => {
    setOpenSideMenu(false);
  }




  return (
    <div className={styles.sideBar}>
  <GrClose className={styles.sideBar_closeBtn} onClick={() => closeSideBar()}/>

  <div className={styles.sideBar_box}>
    <Image src={images.logo} altt="logo" width={150} height={150} />
    <p> Discover the m\world famous NFT and Buy and sell your favourite NFTs with metanium & also create your own</p>
    <div className={styles.sideBar_social}>
      <a href='#'>
        <TiSocialFacebook />
      </a>
      <a href='#'>
        <TiSocialLinkedin />
      </a>
      <a href='#'>
        <TiSocialTwitter />
      </a>
      <a href='#'>
        <TiSocialYoutube />
      </a>
      <a href='#'>
        <TiSocialInstagram />
      </a>

    </div>
    </div>

    <div className={styles.sideBar_menu}>
      <div>
        <div className={styles.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
          <p>Discover</p>
          <TiArrowSortedDown/>
        </div>
        {openDiscover && (
          <div className={styles.sideBar_discover}>
            {
              discover.map((el, i) => (
                <p key={i+1}> <Link href={{pathname: `${el.link}` }}>{el.name}</Link></p>
              ))}
            </div>
        )}
        </div>

        <div>
        <div className={styles.sideBar_menu_box} onClick={() => openHelpMenu()}>
          <p>Help Center</p>
          <TiArrowSortedDown/>
          </div>
          {openHelp && (
            <div className={styles.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i+1}> <Link href={{pathname: `${el.link}` }}>{el.name}</Link></p>
              ))}
              </div>
          )}
          </div>

      </div>

      <div className={styles.sideBar_button}>
      <Button btnName="Create" handleClick={() => {}}/>
        <Button btnName="Connect Wallet" handleClick={() => {}}/>
      </div>
    </div>
  )
}

export default SideBar
