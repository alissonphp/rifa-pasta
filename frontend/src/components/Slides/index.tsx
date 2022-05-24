import "react-responsive-carousel/lib/styles/carousel.css";
import {Carousel} from "react-responsive-carousel";

const Slides = () => {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
            emulateTouch={true}
            dynamicHeight={true}
            swipeable={true}
            stopOnHover={true}
            transitionTime={300}
        >
            <div>
                <img
                    src="https://i.ibb.co/3FCyCzw/Whats-App-Image-2022-05-24-at-11-10-58.jpg"
                    alt=""
                />
            </div>
            <div>
                <img
                    src="https://i.ibb.co/LQDDWtL/Whats-App-Image-2022-05-24-at-11-10-59.jpg"
                    alt=""
                />
            </div>
        </Carousel>
    );
};
export default Slides;