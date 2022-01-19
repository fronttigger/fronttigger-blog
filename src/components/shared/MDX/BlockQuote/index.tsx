import { blockquote } from './styles.css'

const BlockQuote = ({
  children,
}: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>) => (
  <blockquote className={blockquote}>{children}</blockquote>
)

export default BlockQuote
