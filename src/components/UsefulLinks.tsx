
import Section from "./Section"
import Split from "./Split"

export default function UsefulLinks(){


    return(
        <Section className="min-h-[540px] pt-[20px] bg-babyblue text-navy">
            <div className="bg-white p-[60px]">
                <div>
                    <h2>Some helpful links to get you started</h2>
                    <p>Check out our blogs too...</p>
                </div>
                <Split responsive="md" className="min-h-[200px]" left_span='6' right_span='6'
                    left={
                        <ul className="p-[20px] faq-list">
                            <li>Frequently Asked Questions</li>
                            <li>How do I refer someone for EclispeCare</li>
                            <li>Who is Eligible for NDIS</li>
                            <li>How to set goals</li>
                        </ul>
                    } 
                    right={
                        <ul className="hidden md:block p-[20px] faq-list">
                            <li>Navigating NDIS</li>
                            <li>Where can I find more Information about NDIS</li>
                            <li>What to consider when looking for support</li>
                            <li>Building your support team</li>
                        </ul>
                    }
                />
            </div>
        </Section>
    )
}