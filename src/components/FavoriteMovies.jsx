import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import styles from "./style/popular.module.css";
export default function Favoriteget() {
  const [fav, setfav] = useState([]);

  const [read,setread]=useState(false)
  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }

      const token=window.localStorage.getItem('token')

  useEffect(() => {
    fetch("https://movies-app-237.herokuapp.com/discover/favorite", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `${getToken()}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.neworder);
        setfav(data.neworder);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar/>
    <section className={styles.body}>
      {fav.map((movie) => {
        const { movie_name,rating,released,movie_path,description } =  movie;
        return (
          <div className={styles.card}>
            <img className={styles.movie_image} src={movie_path} alt={movie_name} />
            
            <div className={styles.details}>
            <div className={styles.rating}>{rating}</div><br/>
              <p className={styles.title}>{movie_name}
              <p className={styles.date}>{released}</p>
              <button className={styles.favbtn}>Favorite</button></p>
              
            </div>
            <p> <span>{read? description : `${description.substring(0,20)}...`}
            <button className={styles.show} onClick={()=>setread(!read)}>{read? "showless" : "showmore"}</button>
            </span>
            </p>
          </div>
        );
      })}
    </section>
    </div>
   
  );
}