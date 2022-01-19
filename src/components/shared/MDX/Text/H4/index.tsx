import { h4 } from './styles.css'

const H4 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h4 className={h4}>{children}</h4>
}

export default H4
