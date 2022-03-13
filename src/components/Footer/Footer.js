import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { scrollTo } from '../../utils'

const Footer = ({ aboutFooter }) => (
  <footer className="flex h-24 flex-col items-center justify-center bg-stone-900 text-stone-100">
    {documentToReactComponents(aboutFooter?.text)}
    <p onClick={scrollTo('landing')} className="cursor-pointer underline">
      Jump to top
    </p>
    {/* <p className="text-sm">{aboutFooter?.text}</p> */}
  </footer>
)

export default Footer
