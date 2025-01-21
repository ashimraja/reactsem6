// create carousel (image changer)
// using useEffect. place 4 images 
//in public directory and
//dange at interval of 4 seconds


//2.Implement count down timer using useEffect 5:00 4:59 4:00 3:59 3:00

import { useEffect, useState } from "react";

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
]
function Carousel(){
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);
        return (
            <div style={{display:"flex",alignItems:"center",justifyContent:"center", marginTop:"200px"}} className="carousel">
                <img style={{width:"500px",heigth:"100px"}} src={images[index]} alt="carousel image"/>
            </div>
        )
}
export default Carousel