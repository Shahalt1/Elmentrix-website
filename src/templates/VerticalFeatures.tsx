import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Why Choose Elementrix?"
    description="Discover our comprehensive approach to robotics and AI education that combines hands-on learning with cutting-edge technology."
  >
    <VerticalFeatureRow
      title="Hands-on Robotics Learning"
      description="Build and program real robots through our interactive courses. Get practical experience with industry-standard hardware and software tools while learning fundamental robotics concepts."
      image="/assets/images/feature.svg"
      imageAlt="Robotics learning feature"
    />
    <VerticalFeatureRow
      title="AI & Machine Learning"
      description="Master the fundamentals of artificial intelligence and machine learning through practical projects. Learn to develop smart applications and understand the technology shaping our future."
      image="/assets/images/feature2.svg"
      imageAlt="AI learning feature"
      reverse
    />
    <VerticalFeatureRow
      title="Expert-Led Community"
      description="Join a vibrant community of learners and industry experts. Participate in workshops, competitions, and collaborative projects to enhance your skills and build your portfolio."
      image="/assets/images/feature3.svg"
      imageAlt="Community feature"
    />
  </Section>
);

export { VerticalFeatures };
