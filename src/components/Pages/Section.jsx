import SectionTitle from "./SectionTitle";


const Section = ({ id, title, description, children }) => {
    return (
        <section id={id} className="py-10 lg:py-20">
            <SectionTitle>
                <h2 className="text-center mb-4">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center">{description}</p>
            {children}
        </section>
    )
}

export default Section