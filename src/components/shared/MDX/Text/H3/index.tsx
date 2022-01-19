import { h3 } from './styles.css'

const H3 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h3 className={h3}>{children}</h3>
}

export default H3
