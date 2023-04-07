import close from "../images/icon-close.svg";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

export default function Lightbox({
  products,
  slideIndex,
  nextSlide,
  prevSlide,
  setShowLightBox
}) {
  return (
    <article className="bg-black fixed top-0 left-0 bottom-0 right-0 bg-opacity-75">
      <button onClick={() => setShowLightBox(false)}>
        <img src={close} alt="" className="w-10 absolute top-10 right-10"/>
      </button>

      <div className="flex items-center justify-center h-screen">
        {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
            <img
              src={item.mainImage}
              alt=""
              className="big-image lg:w-full lg:rounded-2xl"
              style
            />

            <ul>
              <li>
                <button onClick={prevSlide} className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2">
                  <FaChevronLeft />
                </button>
              </li>
              <li>
                <button onClick={nextSlide} className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2">
                  <FaChevronRight />
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}
