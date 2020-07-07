interface BreakfastInterface {
  breakfastName: string
  description: string
  img: string
  attr: string
  info: string
  alt: string
}

export interface BreakfastDataInterface {
  [key: string]: BreakfastInterface
}

export default BreakfastInterface
