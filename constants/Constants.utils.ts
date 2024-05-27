import jorbagh from "@/assets/images/jorbagh.png";
import civillines from "@/assets/images/civillines.png";

const PROPERTYDETAILS = [
  {
    name: "Jor Bagh",
    city: "New Delhi, India",
    sqft: 3500,
    acre: 0.5,
    fractionalInvestment: false,
    registered: 3,
    path: jorbagh,
  },
  {
    name: "Penthouse Paradise",
    city: "New Delhi",
    sqft: 5000,
    acre: 0.7,
    fractionalInvestment: true,
    registered: 5,
    path: civillines,
  },
  {
    name: "Riverside Mansion",
    city: "New Delhi",
    sqft: 8000,
    acre: 1.2,
    fractionalInvestment: true,
    registered: 10,
    path: jorbagh,
  },
];

const FEATUREDPROPERTIES = [
  {
    name: "Sea View Haven",
    city: "Mumbai, India",
    sqft: 6000,
    acre: 1.0,
    fractionalInvestment: true,
    registered: 8,
    path: civillines,
    startingAt: "$2,500,000",
    totalValue: "$9,000,000",
    peopleRegistered: 180,
    bedrooms: 6,
    bath: 5,
  },
  {
    name: "Heritage Villa",
    city: "Kolkata, India",
    sqft: 4500,
    acre: 0.8,
    fractionalInvestment: false,
    registered: 6,
    path: jorbagh,
    startingAt: "$1,800,000",
    totalValue: "$6,500,000",
    peopleRegistered: 120,
    bedrooms: 5,
    bath: 4,
  },
  {
    name: "Riverside Mansion",
    city: "New Delhi, India",
    sqft: 8000,
    acre: 1.2,
    fractionalInvestment: true,
    registered: 10,
    path: jorbagh,
    startingAt: "$3,000,000",
    totalValue: "$10,000,000",
    peopleRegistered: 200,
    bedrooms: 7,
    bath: 6,
  },
];

export { PROPERTYDETAILS, FEATUREDPROPERTIES };
