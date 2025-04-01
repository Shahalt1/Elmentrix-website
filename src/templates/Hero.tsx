import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/courses#courses" scroll={false}>
            Courses
          </Link>
        </li>
        <li>
          <Link href="/signin">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Transform your future with\n'}
            <span className="text-primary-500">Robotics & AI Education</span>
          </>
        }
        description="Experience hands-on learning in robotics and artificial intelligence through our innovative education platform. Join the tech revolution today!"
        button={
          <Link href="/get-started">
            <Button xl>Start Learning Now</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
