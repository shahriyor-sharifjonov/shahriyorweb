import styles from '../styles/Contacts.module.scss'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import SubHeaderItem from '../components/SubHeaderItem'
import { useState, useEffect } from 'react'
import ContactsSidebar from '../components/ContactsSidebar'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

export default function Contacts() { 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const date = new Date
  const options = { weekday: 'short', day: 'numeric', month: 'short' }
  const formattedDate = date.toLocaleDateString("en-US", options)

  const [code, setCode] = useState(
`const button = document.querySelector('#sendBtn'); 

const message = {
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: "${formattedDate}"
}

button.addEventListener('click', () => {
  form.send(message); 
})`)

  useEffect(() => {
    setCode(
`const button = document.querySelector('#sendBtn'); 

const message = {
  name: "${name}",
  email: "${email}",
  message: "${message}",
  date: "${formattedDate}"
}

button.addEventListener('click', () => {
  form.send(message); 
})`)
  }, [name, email, message]);

  return (
    <>
      <Head>
        <title>Contacts - Shahriyor Sharifjonov</title>
        <link rel="canonical" href="https://www.shahriyorweb.com/contacts" />
      </Head>
      <div className={`wrapper`}>
        <Header page="contacts"/>
        <motion.main className={`main inner`} initial="pageInitial" animate="pageAnimate" variants={{pageInitial: {opacity: 0},pageAnimate: {opacity: 1}}}>
          <ContactsSidebar />
          <div className={`${styles.content} content`}>
            <div className={`subheader`}>
              <SubHeaderItem title='_contact-me'/> 
            </div>
            <div className={`${styles.contentRow}`}>
              <motion.div className={`${styles.form}`} 
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
                <div className={styles.formInner}>
                  <label htmlFor="name" className={`${styles.label}`}>_name:</label>
                  <input autoComplete='off' id="name" className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                  <label htmlFor="email" className={`${styles.label}`}>_email:</label>
                  <input autoComplete='off' id="email" className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="message" className={`${styles.label}`}>_message:</label>
                  <textarea autoComplete='off' id="message" className={`${styles.input} ${styles.textarea}`} value={message} onChange={(e) => setMessage(e.target.value)} required />
                  <motion.button type="submit" className={`btn ${styles.btn}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    submit-message
                  </motion.button>
                </div>
              </motion.div>
              <motion.div className={`${styles.result}`} 
                initial={{ opacity: 0 }} 
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1,
                  },
                }}>
                <Editor 
                  value={code}
                  onValueChange={code => setCode(code)}
                  highlight={code => highlight(code, languages.js)}
                  padding={20}
                  disabled 
                />
              </motion.div>
            </div>
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  )
}