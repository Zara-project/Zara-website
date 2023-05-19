"use client"
import { useState, useEffect } from "react";
import Navbar from "../navBar/page";
import "./page.css";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const images = [
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1870/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1870/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489",
    "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-20//w/1870/IMAGE-landscape-default-fill-c8a9f5dd-b100-4b5e-8247-6b33343bb68b-default_0.jpg?ts=1684087529227"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to change the current image index
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set interval to change the image every 5 seconds (adjust the time interval as needed)
    const interval = setInterval(changeImage, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images[currentImageIndex];

  return (
    <div>
      <body style={{ backgroundImage: `url(${currentImage})`, backgroundSize: "cover" }}>
        <Navbar />
      </body>
    </div>
  );
}

export default Home;
