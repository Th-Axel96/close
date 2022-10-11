import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Logo from "@src/assets/img/pexels-burak-karaduman-1549326.jpg";
import img1 from "@src/assets/img/img1.jpg";

let styles = {
  carousel: "w-96 h-96 ",

};

function Slider() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel className={styles.carousel}>
        <div>
          <Image src={Logo} />
        </div>
        <div>
          <Image src={img1} />
        </div>
        <div>
          <Image src={Logo} />
        </div>
        <div>
          <Image src={Logo} />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
