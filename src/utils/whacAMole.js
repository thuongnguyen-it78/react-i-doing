import { constants } from 'constants/whatAMole'
import gsap from 'gsap'

export const generateMoles = () =>
  new Array(constants.MOLES).fill().map(() => ({
    speed: gsap.utils.random(0.5, 2),
    delay: gsap.utils.random(0.5, 5),
    points: constants.MOLE_SCORE,
  }))
