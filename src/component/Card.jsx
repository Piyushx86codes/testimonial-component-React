import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

export const Card =(props)=>{
    let reviews = props.reviews
    return (
        <div>
         <div>
            <img src={reviews.image}/>
         </div>
         <div>
            <p>
                {reviews.name}
            </p>
         </div>
         <div>
            <p>{reviews.job}</p>
         </div>
         <div>
            <FaQuoteLeft/>
         </div>
         <div>
            {reviews.text}
         </div>
         <div>
            <FaQuoteRight/>
         </div>
         <div>
            <IoIosArrowBack/>
         </div>
         <div>
            <IoIosArrowForward/>
         </div>
         <div>
            <button>
                Surprise Me
            </button>
         </div>
        </div>
    )
}