import Article from "../../components/Article"

import img_hero from '../../assets/school_to_work.jpg';

export default function Blog_TipsOnTransitioning(){

    return(

        <Article img_hero={img_hero} img_article=""
        text_article={
            <>
            <h1 className="text-h1-sm sm:text-h1-base">Tips on transitioning from school to work with NDIS support.</h1>
            <br/>
            </>
        }></Article>
    
    )
}