import styles from "./App.module.scss"
import "./global.scss"

import { Header } from './components/Header/Header'
import { SideBar } from "./components/SideBar/SideBar"
import { Post } from "./components/Posts/Posts"
import { ApiContext, APiContextProvider } from "./Context/Context"
import { useContext, useEffect, useState } from "react"




function App() {
  const ContextValues = useContext(ApiContext)

  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
          <SideBar />
          <main>
            {ContextValues.map((post,index)=>{
              return(<Post
                key={post.id}
                author={post.author}
                content={post.content}
                time={post.time} id={index}              
              />)
            })}
          </main>
        </div>
      
    </div>
  )
}


export default App
