import React from 'react'
import { useSpring } from 'react-spring'

import LeftSection from './modules/left'
import RightSection from './modules/right'

import './styles/home.scss'

const HomePage = () => {
  // for parallax effect with mouse
  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const [move, setMove] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
    <div
      id="home"
      className="home_wrapper"
      onMouseMove={({ clientX: x, clientY: y }) => setMove({ xy: calc(x, y) })}
    >
      <div className="content" >
        <LeftSection move={move} />
        <RightSection />
      </div>
    </div>
  )
}

export default HomePage
