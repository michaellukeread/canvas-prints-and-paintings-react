import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const About = ({ aboutSummary }) => (
  <section
    id="about"
    className="flex scroll-mt-20 flex-col items-center gap-8 bg-stone-900 pt-8"
  >
    <h1 className="text-center text-4xl font-bold tracking-wider text-stone-100">
      About Us
    </h1>
    <div className="prose prose-invert px-8 last:pb-8 md:px-0">
      {documentToReactComponents(aboutSummary?.text)}
    </div>
  </section>
)

export default About
