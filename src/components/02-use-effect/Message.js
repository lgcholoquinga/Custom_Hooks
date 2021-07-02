import React, { useEffect, useState } from 'react'

export const Message = () => {


  const [coord, setCoord] = useState({
    x: 0,
    y: 0
  });

  const { x,y } = coord;

  useEffect(() => {

    const mouseMov = (e) => {
      setCoord({
        x: e.x,
        y: e.y
      });
    };
    window.addEventListener('mousemove',mouseMov)

    return () => {
      window.removeEventListener('mousemove',mouseMov);
    }
  }, [])

  return (
    <>
      <h5>You are Great.</h5>
      <p>X: { x }</p>
      <p>Y: { y }</p>
    </>
  )
}
