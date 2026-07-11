import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import ProgressiveImage from 'react-progressive-graceful-image'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="motion-safe:animate-fade-in-up">
        <div className="flex flex-col items-center justify-center pt-10 pb-12 text-center sm:pt-16">
          <ProgressiveImage src="/static/images/profile-pic.jpg">
            {(src, loading) => (
              <img
                className={`image${
                  loading ? ' loading' : ' loaded'
                } h-48 w-48 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700`}
                src={src}
                alt="avatar"
                width="192"
                height="192"
              />
            )}
          </ProgressiveImage>
          <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Pinardy
          </h1>
          <p className="mt-4 text-xl font-medium text-primary-500 dark:text-primary-400">
            Software Engineer
          </p>
          <p className="mt-3 max-w-xl text-lg leading-7 text-gray-600 dark:text-gray-300">
            I enjoy the process of creating new things.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-primary-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-600"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-primary-400 dark:hover:text-primary-400"
            >
              About me
            </Link>
          </div>
          <div className="mt-8 flex space-x-5">
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          </div>
        </div>
      </div>
    </>
  )
}
