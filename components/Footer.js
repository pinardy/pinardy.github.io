import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4 flex space-x-5">
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} ${siteMetadata.author} · Built with `}
          <Link
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
            className="transition-colors hover:text-primary-500 dark:hover:text-primary-400"
          >
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
