import { ul } from './styles.css'

const Ul = ({
  children,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => {
  return <ul className={ul}>{children}</ul>
}

export default Ul
