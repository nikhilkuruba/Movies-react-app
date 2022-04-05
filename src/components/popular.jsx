
import Navbar from './navbar';
import React, { useEffect, useState } from "react";
import styles from "./style/popular.module.css";
export default function PopularPage() {
  const [popular, setpopular] = useState([]);

  const [read,setread]=useState(false)
  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }
  const handleClick=async (movie)=>{
    console.log(movie)
    const { title, vote_average, release_date, poster_paths, overview } =movie
    try {
      const token=window.localStorage.getItem('token')
      const movie_name=title;
      const rating=vote_average;
      const released=release_date;
      const movie_path=poster_paths;
      const description=overview
      const selected="favorite"
     const response= await fetch("https://movies-app-237.herokuapp.com/discover/favorite",{
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `${getToken()}`
      },
      body:JSON.stringify({
        movie_name,
        rating,
        released,
        movie_path,
        description,
        selected,
      })
   })
   const data=await response.json()
   console.log(data)
   if(!data.status==200){
    const error = new Error(response.error);
    throw error;
   }  
    } catch (err) {
      console.log(err)
      
    }
  }
  useEffect(() => {
    fetch("https://movies-app-237.herokuapp.com/discover/popular", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.movieinformation);
        setpopular(data.movieinformation);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
    <Navbar/>
    <section className={styles.body}>
      {popular.map((movie) => {
        const { title, vote_average, release_date, poster_paths, overview } =
          movie;
        return (
          <div className={styles.card}>
            <img className={styles.movie_image} src={poster_paths} alt={title} />
            
            <div className={styles.details}>
            <div className={styles.rating}>{vote_average}</div><br/>
              <p className={styles.title}>{title}
              <p className={styles.date}>{release_date}</p>
              <button className={styles.favbtn} onClick={()=>handleClick(movie)} >Favorite</button></p>
              
            </div>
            <p> <span>{read? overview : `${overview.substring(0,20)}...`}
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
