import React from 'react'
import styles from "./NavBar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { Discover , HelpCenter , Notification , SideBar , Profile} from './index'
import { Button } from "../ComponentIndex"
import images from '../../img';
import { useState } from 'react'

const NavBar = () => {

  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "HelpCenter") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    }
    else{
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    }else{
      setNotification(false);
    }
  }

  const openProfile = () => {
    if(!profile){
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    }else{
      setProfile(false);
    }
  }

  const openSideBar = () => {
    if(!openSideMenu){
      setOpenSideMenu(true);
    }else{
      setOpenSideMenu(false);
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <div className={styles.logo}>
            <Image src={images.logo} alt="NFT MARKET PLACE" width={120} height={100} />
          </div>
          <div className={styles.navbar_container_left_box_input}>
            <div className={styles.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={styles.search_icon} />
            </div>
        </div>
      </div>
    

      <div className={styles.navbar_container_right}>
        <div className={styles.navbar_container_right_discover}>
          <p onClick={(e) => {openMenu(e)}}> Discover </p>
          {discover && ( <div className={styles.navbar_container_right_discover_box}><Discover/></div> )}
          </div>
        
          <div className={styles.navbar_container_right_help}>
            <p onClick={(e) => {openMenu(e)}}> HelpCenter </p>
            {help && ( <div className={styles.navbar_container_right_help_box}><HelpCenter/></div> )}
          </div> 

          <div className={styles.navbar_container_right_notify}>
            <MdNotifications className={styles.notify} onClick={() => openNotification()} /> 
            {notification && <Notification/>}
          </div>

          <div className={styles.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}}/>
          </div>

          <div className={styles.navbar_container_right_profile_box}>
            <div className={styles.navbar_container_right_profile}>
              <Image src={images.user11} alt="profile" width={40} height={40} onClick={() => openProfile()} className={styles.navbar_container_right_profile}/> 
              {profile && <Profile/>}
            </div>
          </div>

        <div className={styles.navbar_container_right_menuBtn}>
          <CgMenuRight className={styles.menuBtn} onClick={() => openSideBar()}/>
        </div> 
      </div>
     </div>

     {
      openSideMenu && (
        <div className={styles.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu}/>
        </div>
      )
     }
    </div>
  )
}

export default NavBar
