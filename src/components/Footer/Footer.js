import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Footer = ({ aboutFooter }) => (
  <footer className="flex text-stone-900 h-24 flex justify-center items-center">
    {documentToReactComponents(aboutFooter?.text)}
    {/* <p className="text-sm">{aboutFooter?.text}</p> */}
  </footer>
)

export default Footer
