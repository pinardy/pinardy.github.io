import NextImage from 'next/image'

// Static hosting (GitHub Pages) has no image optimization server,
// so serve every image at its original URL.
const passthroughLoader = ({ src }) => src

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage loader={passthroughLoader} unoptimized {...rest} />

export default Image
