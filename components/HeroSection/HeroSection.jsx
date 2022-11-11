import React from 'react'
import Image from 'next/image'
import styles from './HeroSection.module.css'
import { Button } from "../ComponentIndex"
import images from "../../img"


const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
        <div className={styles.heroSection_box}>
            <div className={styles.heroSection_box_left}>
                <h1>Discover, collect, and sell NFTs 🖼️</h1>
                <p>Discover and find NFTs of your favourite and also create your own</p>
                <Button btnName="start your search" />
            </div>
            <div className={styles.heroSection_box_right}>
                <Image className={styles.heroSection_box_right_image} src={images.hero} alt="Hero-Section" width={600} height={600} />
            </div>
        </div>
    </div>  
  )
}

export default HeroSection