'use client';

import React from 'react';

import Link from 'next/link';
import NewsletterIllustration from './newsletter-illustration'

export default function Newsletter() {
  const [email, setEmail] = React.useState('');

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-cyan-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          <NewsletterIllustration />

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-cyan-200 text-md">Join our newsletter to get top news before anyone else.</p>
            </div>

            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-cyan-700 border border-cyan-500 focus:border-cyan-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-cyan-400"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Link
                  className="btn-cta"
                  href={`https://magic.beehiiv.com/v1/6b58d460-8511-44d9-b4bb-694f5eaac55c?email=${email}&redirect_to=${window.location.origin}`}
                  onClick={() => setEmail('')}
                >
                  Subscribe
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
