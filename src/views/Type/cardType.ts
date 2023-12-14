export type CardItem = {
  role: 'emperor' | 'citizen' | 'slave'
  img: 'emperor.jpg' | 'citizen.jpg' | 'slave.jpg'
  isClick?: boolean
  sort?: number
  group?:  'emperor' | 'slave'
}
