import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [input, setinput] = useState('');
  const [output, setoutput] = useState('');

  const [page, setpage] = useState('Home');

  const pinApi = async () => {
    let res = await axios.post('api/run-model', { prompt: input.trim() });
    console.log(res);
    setoutput(res.data.output.trim().replaceAll('.\n\n', ''));
  }

  return (
    <div className={styles.container}>
      {/* <img className={styles.logo} src="./undefined_AI.png" alt="" /> */}
      <nav className={styles.nav}>
        <img className={styles.logo} src="./undefined_AI.png" alt="" />
        <p className={(page == 'Home') ? styles.sel : {}} onClick={() => { setpage('Home') }}>Home</p>
        <p className={(page == 'Features') ? styles.sel : {}} onClick={() => { setpage('Features') }}>Features</p>
      </nav>
      {(page == 'Home') ? <div className={styles.modelFrame}>
        <span className={styles.inputCon} style={{ marginBottom: "50px" }}>
          <label htmlFor="">
            <h1>Input</h1>
            <span className={styles.preset}>preset: Default</span>
          </label>
          <span className={styles.inputWithBtn}>
            <input value={input} onChange={(e) => { setinput(e.target.value) }} placeholder='Write a summary about....' type="text" />
            <button onClick={() => { pinApi() }}>Generate</button>
          </span>
        </span>
        <span className={styles.inputCon}>
          <label htmlFor="">
            <h1>Output</h1>
          </label>
          <textarea value={output} placeholder='Your output goes here....' name="" id="" cols="30" rows="10"></textarea>
        </span>
      </div>
        :
        <div className={styles.features}>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>FAQs</h1>
              <p>Answer questions based on existing knowledge.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Grammar correction</h1>
              <p>Corrects sentences into standard English.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Summarize for a 2nd grader</h1>
              <p>Translates difficult text into simpler concepts.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Natural language to OpenAI API</h1>
              <p>Create code to call to the OpenAI API using a natural language instruction.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Text to command</h1>
              <p>Translate text into programmatic commands.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>English to other languages</h1>
              <p>Translates English text into French, Spanish ....</p>
            </span>
          </span>
          {/*  */}
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>SQL translate</h1>
              <p>Translate natural language to SQL queries.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Parse unstructured data</h1>
              <p>Create tables from long form text by specifying a
                structure and supplying some examples.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Advanced tweet classifier</h1>
              <p>This is an advanced prompt for detecting sentiment.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Python to natural language</h1>
              <p>Explain a piece of Python code in human understandable
                language.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Keywords</h1>
              <p>Extract keywords from a block of text.</p>
            </span>
          </span>
          <span className={styles.elm}>
            <img src="./star.png" alt="" />
            <span>
              <h1>Factual answering</h1>
              <p>Guide the model towards factual answering by showing it how to respond to questions that fall outside its knowledge base.</p>
            </span>
          </span>
        </div>
      }
      <a className={styles.footer} href="https://openai.com/api/">Powered by Open AI</a>
    </div>
  )
}
