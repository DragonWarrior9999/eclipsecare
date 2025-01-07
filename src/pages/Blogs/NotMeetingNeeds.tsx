import Article from "../../components/Article"

import img_hero from '../../assets/not_meeting_needs.jpg';

export default function Blog_NotMeetingNeeds(){

    return(

        <Article img_article="" img_hero={img_hero}
        text_article={
            <h1>What to do if your NDIS plan isn't meeting your needs.</h1>
        }></Article>
    
    )
}