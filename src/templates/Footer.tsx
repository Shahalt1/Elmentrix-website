import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <Link
              href="https://github.com/Elmentrixx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-current text-gray-700 hover:text-black dark:text-white dark:hover:text-gray-300"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12..." />
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/elmentrix/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-current text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-400"
              >
                <path d="M20.447 20.452h-3.554v-5.569..." />
              </svg>
            </Link>

            <Link
              href="https://www.instagram.com/elmentrix_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 fill-current text-gray-700 hover:text-pink-600 dark:text-white dark:hover:text-pink-400"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85..." />
              </svg>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Docs</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
