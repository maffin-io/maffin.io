import Image from 'next/image';
import HeroIllustration from './hero-illustration';

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <HeroIllustration />

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Personal finance
              {' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600/70 to-cyan-600/70">
                made easy
              </span>
            </h1>
            <p className="text-xl mb-8 font-light" data-aos="fade-up" data-aos-delay="200">
              Navigate your financial journey with clarity and confidence.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn-cta mb-3"
                  href="https://free.maffin.io"
                  target="_blank"
                >
                  Start Maffin'
                </a>
              </div>
            </div>
          </div>

          <Image
            data-aos="fade-up"
            data-aos-delay="600"
            src="/images/hero-image.png"
            alt="hero image"
            width="1710"
            height="1110"
          />
        </div>
      </div>
    </section>
  )
}
