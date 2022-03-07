import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { scrollTo } from '../../utils'

const Footer = ({ aboutFooter }) => (
  <footer className="flex bg-stone-900 text-stone-100 h-24 flex flex-col justify-center items-center">
    {documentToReactComponents(aboutFooter?.text)}
    <p onClick={scrollTo('landing')} className="underline cursor-pointer">
      Jump to top
    </p>
    {/* <p className="text-sm">{aboutFooter?.text}</p> */}
  </footer>
)

export default Footer
