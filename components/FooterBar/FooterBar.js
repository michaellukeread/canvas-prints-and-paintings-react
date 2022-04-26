// import Link from 'components/Link'
// import { FOOTER_LINKS } from './config'
import { EyeIcon } from '@heroicons/react/solid'
import Link from 'components/Link'

const SOCIALS = [
  {
    to: 'https://www.facebook.com',
    title: 'Facebook icon'
  },
  {
    to: 'https://www.twitter.com',
    title: 'Twitter icon'
  },
  {
    to: 'https://www.snapchat.com',
    title: 'Snapchat icon'
  },
  {
    to: 'https://www.instagram.com',
    title: 'Instagram icon'
  }
]

const FooterBar = () => (
  <div className="flex h-12 items-center justify-between bg-indigo-700 px-4">
    <div className="flex gap-x-2">
      <EyeIcon className="h-8 w-8 text-indigo-200" />
      <span className="flex items-center before:text-lg before:content-['|']">
        <p className="pl-2 text-xs">© 2022</p>
        <EyeIcon className="h-4 w-4 pl-1  " />
      </span>
    </div>
    <div className="flex gap-x-2">
      {SOCIALS.map(({ title, to }) => (
        <Link key={title} className="text-xs font-bold" to={to}>
          {title}
        </Link>
      ))}
    </div>
  </div>
)

export default FooterBar
