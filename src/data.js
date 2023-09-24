import {
  FaGlobe,
  FaHotel,
  FaUser,
  FaSpa,
  FaSwimmer,
  FaGlassCheers,
  FaDumbbell,
  FaDollarSign,
  FaPlane,
  FaArrowRight,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationPin, MdStar, MdMessage } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";

export const AboutDetails = [
  {
    id: 1,
    icon: <FaArrowRight />,
    name: "First Class Flight",
  },
  {
    id: 2,
    icon: <FaArrowRight />,
    name: "5 Star Accommodations",
  },
  {
    id: 3,
    icon: <FaArrowRight />,
    name: "150 Premium City Tours",
  },
];

export const AboutDetails1 = [
  {
    id: 1,
    icon: <FaArrowRight />,
    name: "Handpicked Hotels",
  },
  {
    id: 2,
    icon: <FaArrowRight />,
    name: "Latest Model Vehicles",
  },
  {
    id: 3,
    icon: <FaArrowRight />,
    name: "24/7 Service",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaGlobe />,
    name: "WorldWide Tours",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 2,
    icon: <FaHotel />,
    name: "Hotel Reservation",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 3,
    icon: <FaUser />,
    name: "Travel Guides",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 4,
    icon: <FaDumbbell />,
    name: "Gym & Yoga",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 5,
    icon: <ImSpoonKnife />,
    name: "Food & Restaurant",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 6,
    icon: <FaSpa />,
    name: "Spa & Fitness",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 7,
    icon: <FaSwimmer />,
    name: "Sports & Gaming",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
  {
    id: 8,
    icon: <FaGlassCheers />,
    name: "Event & Party",
    desc: "Incididunt eiusmod sunt dolore culpa mollit quis adipisicing est.",
  },
];

export const packages = [
  {
    id: 1,
    img: "./packages/P1.jpg",
    place: "Thailand",
    price: "$149.00",
    icon: <MdStar />,
    desc: "Officia deserunt reprehenderi irure magna aute qui minim enim.",
  },
  {
    id: 2,
    img: "./packages/P2.jpg",
    place: "Indonesia",
    price: "$139.00",
    desc: "Officia deserunt reprehenderi irure magna aute qui minim enim.",
  },
  {
    id: 3,
    img: "./packages/P3.jpg",
    place: "Malaysia",
    price: "$189.00",
    desc: "Officia deserunt reprehenderi irure magna aute qui minim enim.",
  },
];

export const process = [
  {
    id: 1,
    icon: <FaGlobe />,
    name: "Choose A Destination",
    desc: "Excepteur duis voluptate pariatur non eu amet dolor ut ex laborum ex adipisicing veniam.",
  },
  {
    id: 2,
    icon: <FaDollarSign />,
    name: "Pay Online",
    desc: "Excepteur duis voluptate pariatur non eu amet dolor ut ex laborum ex adipisicing veniam.",
  },
  {
    id: 3,
    icon: <FaPlane />,
    name: "Fly Today",
    desc: "Excepteur duis voluptate pariatur non eu amet dolor ut ex laborum ex adipisicing veniam.",
  },
];

export const guides = [
  {
    id: 1,
    img: "./guides/T1.jpg",
    name: "Cooper",
    title: "Tour Guide",
  },
  {
    id: 2,
    img: "./guides/T4.jpg",
    name: "William Anderson",
    title: "Staff Guide",
  },
  {
    id: 3,
    img: "./guides/T2.jpg",
    name: "Sara Wilsson",
    title: "City Guide",
  },
  {
    id: 4,
    img: "./guides/T3.jpg",
    name: "Walter White",
    title: "Local Guide",
  },
];

export const reviews = [
  {
    id: 1,
    image: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "maria ferguson",
    location: "New York,USA",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "john doe",
    location: "New York,USA",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image: "https://www.course-api.com/images/people/person-3.jpeg",
    name: "peter smith",
    location: "New York,USA",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "susan andersen",
    location: "New York,USA",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];

export const footer1 = [
  {
    id: 1,
    icon: <FaArrowRight />,
    name: "About Us",
  },
  {
    id: 2,
    icon: <FaArrowRight />,
    name: "Contact Us",
  },
  {
    id: 3,
    icon: <FaArrowRight />,
    name: "Privacy Policy",
  },
  {
    id: 4,
    icon: <FaArrowRight />,
    name: "Terms & Conditions",
  },
  {
    id: 5,
    icon: <FaArrowRight />,
    name: "FAQs & Help",
  },
];

export const footer2 = [
  {
    id: 6,
    icon: <MdLocationPin />,
    name: "New York, USA",
  },
  {
    id: 7,
    icon: <FaPhone />,
    name: "+1234567890",
  },
  {
    id: 8,
    icon: <MdMessage />,
    name: "mail@gmail.com",
  },
];

export const footsocial = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
];

export const footer3 = [
  {
    id: 9,
    icon: <FaArrowRight />,
    name: "Food & Restaurant",
  },
  {
    id: 10,
    icon: <FaArrowRight />,
    name: "Spa & Fitness",
  },
  {
    id: 11,
    icon: <FaArrowRight />,
    name: "Sports & Gaming",
  },
  {
    id: 12,
    icon: <FaArrowRight />,
    name: "Event & Party",
  },
  {
    id: 13,
    icon: <FaArrowRight />,
    name: "GYM & Yoga",
  },
];
