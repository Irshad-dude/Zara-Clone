import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Occasion() {
  const categoryData = {
    casual: {
      title: "Casual Comforts",
      subtitle: "Elevated everyday essentials.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    evening: {
      title: "Evening Elegance",
      subtitle: "Sophistication after sunset.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    lounge: {
      title: "Lounge & Relax",
      subtitle: "Maximum comfort, zero compromise.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    weekend: {
      title: "Weekend Vibes",
      subtitle: "Effortless style for downtime.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    active: {
      title: "Active Wear",
      subtitle: "Performance meets aesthetic.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    work: {
      title: "Work Essentials",
      subtitle:
        "Elevate your professional silhouette with tailored excellence.",
      linkText: "Shop Professional",
      isHighlighted: true,
      icon: "briefcase",
    },
    formal: {
      title: "Formal Attire",
      subtitle: "Impeccable tailoring for big moments.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
    seasonal: {
      title: "Seasonal Trends",
      subtitle: "Stay ahead of the fashion curve.",
      linkText: "Explore Category",
      isHighlighted: false,
    },
  };
  const products = [
    {
      image: screen3,
      title: "Striped Linen Blend Shirt",
      subtitle: "Autumn Collection",
      price: "49.95 EUR",
    },
    {
      image: screen6,
      title: "Linen Shirt",
      subtitle: "Modern shirt",
      price: "79.00 EUR",
    },
    {
      image: screen4,
      title: "Classic Oxford Shirt",
      subtitle: "Core Essentials",
      price: "39.95 EUR",
    },
    {
      image: screen5,
      title: "Linen Oversize Shirt",
      subtitle: "Modern Fit",
      price: "55.00 EUR",
    },
  ];
  return (
    <>
      <Navbar />
    

      

    </>
  );
}

export default Occasion;
