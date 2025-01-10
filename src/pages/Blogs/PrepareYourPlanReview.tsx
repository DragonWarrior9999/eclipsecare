import Article from "../../components/Article"

import img_hero from '../../assets/spending-support.jpg';

export default function Blog_PlanReview(){

    return(

        <Article img_article="" img_hero={img_hero}
        text_article={
            <h1 className="text-h1-sm sm:text-h1-base">How to prepare your NDIS plan review.</h1>
        }></Article>
    
    )
}