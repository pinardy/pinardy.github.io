import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ProgressiveImage from 'react-progressive-graceful-image'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div style={{ textAlign: 'center', alignContent: 'center' }}>
            <ProgressiveImage src="/static/images/dog-profile-pic.jpg">
              {(src, loading) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    className={`image${loading ? ' loading' : ' loaded'} h-48 w-48 rounded-full`}
                    src={src}
                    alt="avatar"
                    width="192px"
                    height="192px"
                  />
                </div>
              )}
            </ProgressiveImage>
            <br />
            <br />
            <div style={{ fontFamily: 'Segoe Script', fontSize: 50 }}>Pinardy Yang</div>
            <br />
            <br />
            <p className="text-lg leading-7 text-gray-300 dark:text-gray-100">Software Engineer</p>
            <br />
            <p className="text-lg leading-7 text-gray-300 dark:text-gray-200">
              I enjoy the process of creating new things.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
