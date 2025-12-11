import { Card } from "./Card"

export const Testimonial =(props)=>{
    let reviews = props.reviews;
    return (
        <div>
            <Card reviews={reviews[0]}/>
        </div>
    )
}