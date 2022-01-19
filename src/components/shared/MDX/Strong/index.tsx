import { strongText } from './styles.css'

const Strong = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return <strong className={strongText}>{children}</strong>
}

export default Strong
