'use client'
import React from "react"
import styles from './style.module.css'
import { useState } from "react"
import Modal from './component/project'


export default function index(){

const projects =[
  {
    title: 'Nigga',
    src: 'demo-pic01.jpg',
    color: '#000000'
  },
  {
    title: 'Tapatio Chips',
    src: 'demo-pic02.jpg',
    color: '#8C8C8C'
  },
  {
    title: 'Asian chigga',
    src: 'demo-pic03.jpg',
    color: '#EFE8D3'
  },
  {
    title: 'American Wigga',
    src: 'demo-pic04.jpg',
    color: '#706D63'
  }
]
  const [modal, setModal] = useState({active: false, index: 0})
  //const { active, index } = modal;

  return(
    <main className={styles.main}>
      <div className={styles.body}>
          {
            projects.map((project, index)=>{
              return  <div className={styles.project} onMouseEnter={()=>{setModal({active:true, index})}} onMouseLeave={()=>{setModal({active:false, index})}}>
                <h2 key={index} index={index} setModal={setModal}>
                {project.title}</h2>
                <p>Design and Development</p>
              </div>
            })
          }
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
      
  )
}