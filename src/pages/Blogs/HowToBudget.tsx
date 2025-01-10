import Article from "../../components/Article"
import Form from "../../components/Form";
import Footer from "../../components/Footer";

import img_hero from '../../assets/money_management.jpg';

export default function Blog_HowToBudget(){

    return(
        <>
            <Article img_article="" img_hero={img_hero}
            text_article={
                <>
                    <h1 className="text-h1-sm sm:text-h1-base">How to Budget?</h1>
                    <br/>
                    <h3 className="text-h3-sm sm:text-h3-base">Determine your Income.</h3>
                    <p>Start by identifying all sources of income. This includes your salary, side gigs, passive income, or any other money coming in regularly. It’s important to focus on your net income—the amount you take home after taxes—since that’s the money available for budgeting.</p>
                    <br/>
                    <h3 className="text-h3-sm sm:text-h3-base">Track Your Expenses</h3>
                    <p>Understanding where your money goes is crucial. For at least one month, track all your spending, including fixed expenses (like rent, utilities, and subscriptions) and variable expenses (like groceries, entertainment, and dining out). This provides a clear picture of your spending habits and highlights areas for improvement.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Categorize Your Spending</h3>
                    <p>Organize your expenses into categories, such as housing, transportation, food, savings, and leisure. This helps you see how much you’re spending in each area and allows you to prioritize your needs over wants. Use tools like spreadsheets or budgeting apps to make this process easier and more visual.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Set Financial Goals</h3>
                    <p>dentify your short-term and long-term financial goals. Short-term goals might include saving for a vacation or paying off a small debt, while long-term goals could involve building an emergency fund, buying a home, or planning for retirement. Goals provide motivation and guide your spending choices.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Create Your Budget</h3>
                    <p>Allocate a portion of your income to each expense category, ensuring that your total spending doesn’t exceed your income. A popular method is the 50/30/20 rule: 50% of your income for needs, 30% for wants, and 20% for savings or debt repayment. Adjust these percentages based on your specific situation and goals.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Monitor and Adjust Regularly</h3>
                    <p>our budget isn’t set in stone. Review it monthly to ensure you’re staying on track and make adjustments as needed. Life changes, such as a new job or unexpected expenses, may require you to reallocate funds or revise your goals.</p>
                    <h3 className="text-h3-sm sm:text-h3-base">Avoid Common Pitfalls.</h3>
                    <p>Stick to your budget by avoiding unnecessary splurges and tracking your progress consistently. Build a buffer for unexpected costs and resist the temptation to rely on credit for non-essential expenses.</p>
                    <br/>
                    <p>Budgeting is an ongoing process that gets easier with time and practice. By taking small, consistent steps, you can gain control over your finances, reduce stress, and achieve your financial aspirations.</p>
                </>
            }></Article>
            <Form></Form>
            <Footer></Footer>
        </>
    
    )
}