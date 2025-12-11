import img1 from "../../assets/gallery-2.jpg";
import img2 from "../../assets/gallery-5.jpg";
import img3 from "../../assets/gallery-6.jpg";
import img4 from "../../assets/gallery-3.jpg";
import img5 from "../../assets/gallery-4.jpg";
import img6 from "../../assets/gallery-7.jpg";
import img7 from "../../assets/gallery-8.jpg";
import img8 from "../../assets/gallery-11.jpg";
import img9 from "../../assets/gallery-12.jpg";
import img10 from "../../assets/gallery-9.jpg";
import img11 from "../../assets/gallery-10.jpg";
import img12 from "../../assets/gallery-13.jpg";
import "./galereya.css";

const Gallery = () => {
    const galleryImages = [
        {
            id: 1,
            src: img1,
            alt: "Gallery image 1"
        },
        {
            id: 2,
            src: img2,
            alt: "Gallery image 2"
        },
        {
            id: 3,
            src: img3,
            alt: "Gallery image 3"
        },
        {
            id: 4,
            src: img4,
            alt: "Gallery image 4"
        },
        {
            id: 5,
            src: img5,
            alt: "Gallery image 5"
        },
        {
            id: 6,
            src: img6,
            alt: "Gallery image 6"
        },
        {
            id: 7,
            src: img7,
            alt: "Gallery image 7"
        },
        {
            id: 8,
            src: img8,
            alt: "Gallery image 8"
        },
        {
            id: 9,
            src: img9,
            alt: "Gallery image 9"
        },
        {
            id: 10,
            src: img10,
            alt: "Gallery image 10"
        },
        {
            id: 11,
            src: img11,
            alt: "Gallery image 11"
        },
        {
            id: 12,
            src: img12,
            alt: "Gallery image 12"
        },
    ];

    return (
        <section className="MainK">
            <div className="ikki">
                <div className="about container">
                    <h1>Galereya</h1>
                    <p>Bosh sahifa----- Galereya</p>
                </div>
            </div>
            <div className="mainJ container">
                <div className="mainG_imge">
                    {galleryImages.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            className={`mainG_imge_${image.id}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;