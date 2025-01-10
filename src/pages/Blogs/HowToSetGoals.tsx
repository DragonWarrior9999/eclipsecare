import Article from "../../components/Article"
import Form from "../../components/Form";
import Footer from "../../components/Footer";

import img_hero from '../../assets/set_goals.jpg';

export default function Blog_HowToSetGoals(){

    return(

        <>
            <Article img_article="" img_hero={img_hero}
            text_article={
                <>
                    <h1 className="text-h1-sm sm:text-h1-base">How to set goals.</h1>
                    <br/>
                    <p>Setting goals is an essential step in achieving personal and professional success. Clear, well-defined goals provide direction, motivation, and a sense of purpose. Here’s a guide to help you set effective goals and work towards them:</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Start with a Vision</h3>
                    <p>Begin by reflecting on what you want to achieve in the short term and long term. Your vision could include career ambitions, personal growth, health, relationships, or hobbies. Having a clear idea of where you want to go helps you focus your energy and efforts.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Make Your Goals SMART</h3>
                    <p>Ensure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound. For example, instead of saying, “I want to save money,” set a SMART goal like, “I will save $5,000 by the end of the year by setting aside $200 each week.” SMART goals provide clarity and structure.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Break Goals into Steps</h3>
                    <p>Large goals can feel overwhelming, so break them down into smaller, actionable steps. Each step should be manageable and contribute to the larger objective. For instance, if your goal is to run a marathon, start with weekly running targets and gradually increase your distance.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Write Down Your Goals</h3>
                    <p>Putting your goals in writing makes them more tangible and serves as a constant reminder of what you want to achieve. Keep your written goals somewhere visible, like a journal, planner, or digital app.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Track Your Progress</h3>
                    <p>Regularly monitor your progress to stay on track and celebrate small milestones along the way. Tracking also helps identify obstacles and adjust your approach if necessary.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Stay Flexible and Committed</h3>
                    <p>Life can be unpredictable, so be prepared to adapt your goals when circumstances change. While flexibility is important, staying committed to your overall vision will keep you motivated.</p>
                    <br/>
                    <p>By following these steps, you can turn your aspirations into actionable plans and achieve meaningful success in every area of your life.</p>
                </>
            }>

            </Article>
            <Form></Form>
            <Footer></Footer>
        </>
    
    )
}