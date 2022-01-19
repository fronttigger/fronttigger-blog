import { h2 } from './styles.css'

const H2 = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
  return <h2 className={h2}>{children}</h2>
}

export default H2
