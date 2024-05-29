import { ImageSourcePropType } from 'react-native'

interface PropertyDetails {
  name: string
  city: string
  sqft: number
  acre: number
  fractionalInvestment: boolean
  registered: number
  path: ImageSourcePropType
  id: number | string
  details: string
  totalValue: string
  pricePerShare: string
  bedrooms?: number
  bath?: number
  availableSlots?: string
  fundRaisingEndsIn?: string
  startingAt?: string
  totalRegistration?: number
}

interface FeaturedProperties {
  [key: string]: PropertyDetails[]
}

export { PropertyDetails, FeaturedProperties }
