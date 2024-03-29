import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, fontSize = 'sm' }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a
        className={`block text-center text-${fontSize} font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400`}
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
