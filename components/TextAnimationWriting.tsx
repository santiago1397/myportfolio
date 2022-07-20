import React, { useState, useEffect } from 'react'
import styled from 'styled-components'





export const TextAnimationWriting: React.FC = () => {

  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);
  const toRotate: string[] = ["Web Developer", "Software Engineer Student", "Enthusiastic Dev"];
  const period: number = 1200;

  useEffect(() => {

    let ticker: NodeJS.Timer = setInterval(() => {
      tick();
    }, delta);

    const tick = (): void => {
      let i: number = loopNum % toRotate.length;
      let fullText: string = toRotate[i];
      let updatedText: string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);

      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(150)

      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }



    return () => { clearInterval(ticker) };
  }, [text, delta, loopNum, isDeleting, toRotate])



  return (

    <h2>{text}</h2>

  )
}

export default TextAnimationWriting