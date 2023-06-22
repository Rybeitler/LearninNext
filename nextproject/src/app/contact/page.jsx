import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
    title: 'Ryan Dev Contact',
    description: 'Contact page',
}

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.tite}></h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src='/contact.png'
                        alt=''
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder='name' className={styles.input} />
                    <input type="text" placeholder='email' className={styles.input} />
                    <textarea name="" id="" cols="30" rows="10"
                        className={styles.textArea}
                        placeholder='message'></textarea>
                    <Button url='#' text='Send' />
                </form>
            </div>
        </div>
    )
}

export default Contact