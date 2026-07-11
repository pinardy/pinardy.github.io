import ProgressiveImage from 'react-progressive-graceful-image'
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc ? 'h-full' : ''
      } group overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:border-primary-500 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary-400 dark:hover:shadow-gray-900/40`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <ProgressiveImage src={imgSrc}>
              {(imgSrc, loading) => (
                <img
                  className={`image${
                    loading ? ' loading' : ' loaded'
                  } w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 md:h-36 lg:h-48`}
                  src={imgSrc}
                  alt={title}
                  width="700"
                  height="465"
                />
              )}
            </ProgressiveImage>
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link
              href={href}
              className="transition-colors hover:text-primary-500 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
