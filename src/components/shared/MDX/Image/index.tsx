const Image = ({
  src,
  alt,
}: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
  <img src={src || ''} alt={alt} width="100%" height="100%" />
)

export default Image
