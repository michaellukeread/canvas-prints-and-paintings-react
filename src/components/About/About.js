const About = ({ aboutSummary }) => (
  <section
    id="about"
    className="pt-8 bg-stone-900 flex items-center flex-col gap-8"
  >
    <h1 className="text-4xl tracking-wider font-bold text-center text-stone-100">
      About
    </h1>
    <p className="text-stone-100 w-1/2">{aboutSummary?.text}</p>
  </section>
)

export default About
