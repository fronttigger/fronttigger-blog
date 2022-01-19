import { ol } from './styles.css'

const Ol = ({
  children,
}: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) => {
  return <ol className={ol}>{children}</ol>
}

export default Ol
