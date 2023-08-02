"use client";
import style from "./MeowArticle.module.css";
import { useState, useEffect } from "react";

export default function MeowArticle() {
  const [text, setText] = useState("e데이터 준비중...");
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={style.article}>{text}</article>;
}
