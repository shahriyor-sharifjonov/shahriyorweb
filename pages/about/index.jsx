import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/About.module.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AboutSidebar from '../../components/AboutSidebar'
import SubHeaderItem from '../../components/SubHeaderItem'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

export default function About() {
  const [code, setCode] = useState(`
const fetchData = async (url) => {
  const res = await fetch(url)
  return await res.json()
}

fetchData("https://jsonplaceholder.typicode.com/todos/").then(res => {
    res.map(item => (
        console.log(item)
    ))
})
  `)
  return (
    <>
      <Head>
        <title>About - Shahriyor Sharifjonov</title>
        <link rel="canonical" href="https://www.shahriyorweb.com/about" />
      </Head>
      <div className={`wrapper`}>
        <Header page="about"/>
        <motion.main className={`main inner`} initial="pageInitial" animate="pageAnimate" variants={{pageInitial: {opacity: 0},pageAnimate: {opacity: 1}}}>
          <AboutSidebar />
          <div className={`${styles.content} content`}>
            <div className={`subheader`}>
              <SubHeaderItem title="_about-me" />
            </div>
            <div className={`${styles.contentRow}`}>
              <motion.div className={`${styles.text}`} 
                  initial={{ opacity: 0, y: '-10%' }} animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                      duration: 0.5,
                      },
                  }}
                  exit={{
                      opacity: 0,
                      y: '-10%',
                      transition: {
                      duration: 0.5,
                      },
                  }}
              >
                  <p className={styles.comment}>Hello! My name is Shahriyor and I have been working in web programming for 3 years, specializing mainly in Frontend development. Throughout my career, I have gained significant experience in website development and have collaborated with major companies such as ozon.ru. Most recently, I had the opportunity to work with the Russian bank brobank.ru. In addition to my professional work, I spent a year working for a Ukrainian web studio and currently, I work as a freelance developer. I am proud to have completed over 150 projects and have received over 100 positive reviews from my freelance clients.</p>
              </motion.div>
              <div className={styles.gists}>
                <p className={`comment ${styles.comment}`}>&#47;&#47; Code snippet showcase:</p>
                <div className={styles.gistsList}>
                  <div className={styles.gist}>
                    <div className={styles.gistHeader}>
                      <Image src="/avatar.png" alt="Shahriyor Sharifjonov" width={36} height={36}/>
                      <div className={styles.gistHeaderContent}>
                        <p className={styles.gistUsername}>@shahriyor-sharifjonov</p>
                        <p className={styles.gistDate}>Created 5 months ago</p>
                      </div>
                    </div>
                    <div className={styles.gistContent}>
                      <Editor
                        value={code}
                        onValueChange={code => setCode(code)}
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        disabled={true}
                        style={{
                          fontFamily: '"Fira code", "Fira Mono", monospace',
                          fontSize: 14,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  )
}