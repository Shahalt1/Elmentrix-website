import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to begin your journey into Robotics and AI?"
      subtitle="Join thousands of students learning the future of technology."
      button={
        <Link href="/get-started">
          <Button>Start Free Trial</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
