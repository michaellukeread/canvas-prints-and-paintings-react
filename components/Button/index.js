import LinkButton from './LinkButton'

const VARIANTS = {
  link: LinkButton
}

const Button = ({ variant, ...props }) => {
  const Component = VARIANTS[variant] || VARIANTS.link
  return <Component {...props} />
}

export default Button
