import Article from "../../components/Article"

import img_hero from '../../assets/debunking_myths.jpg';

export default function Blog_MythsDebunked(){

    return(

        <Article img_article="" img_hero={img_hero}
        text_article={
            <h1 className="text-h1-sm sm:text-h1-base">Common NDIS Myths debunked.</h1>
        }></Article>
    
    )
}