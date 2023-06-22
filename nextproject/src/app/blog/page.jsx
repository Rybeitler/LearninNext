import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(){
    const res = await fetch('http://localhost:3000/api/posts',{
        next: {revalidate:10},
    });

if (!res.ok) {
    return notFound();
}

    return res.json()
}

const Blog = async () => {
    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map((item)=>(
            <div key={item._id}>
            <Link href={`/blog/${item._id}`} className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src={item.img}
                        alt=""
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.desc}>{item.desc}</p>
                </div>
            </Link>
            </div>
            ))}
        </div>
    );
};

export default Blog;