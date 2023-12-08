import type { Metadata } from "next";
import { joinUsGetStartSectionData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import joinUsPage from "../../../public/images/join-us.webp";
import JoinUsSegmentSection from "./components/JoinUsSegmentSection";
import meta from "../../metadata/metadata.json";

export const metadata: Metadata = {
  title: meta["Join-Us"].title,
  description: meta["Join-Us"].description,

  openGraph: {
    title: meta["Join-Us"].title,
    description: meta["Join-Us"].description,
    images: {
      url: meta["Join-Us"].openGraph.images,
      height: "627",
      width: "1200",
    },
    url: meta["Join-Us"].openGraph.url,
    type: "website",
    siteName: "Mindfire Digital LLP",
    locale: "en_US",
  },
  twitter: {
    card: "app",
    title: meta["Join-Us"].title,
    description: meta["Join-Us"].description,
    site: "@mindfires",
    creator: "@mindfires",
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
    },
  },
};

const JoinUs = () => {
  return (
    <>
      <section className='bg-slate-50'>
        <div className='flex flex-col lg:flex-row justify-between lg:p-6 lg:px-10'>
          <div className='px-8 lg:basis-2/5 py-16 lg:pl-0'>
            <h1 className='text-4xl leading-10 md:text-5xl max-w-lg md:!leading-[3.5rem] tracking-wide text-mindfire-text-black'>
              Eager to Contribute to Open Source Ecosystems
            </h1>
            <p className='mt-6 text-xl text-mf-light-grey tracking-wide'>
              Explore projects and start working, or discover our
              beginner-friendly open source checklist to learn more.
            </p>
            <div className='flex flex-wrap items-start gap-6 mt-10'>
              <Link
                href='/projects'
                className='bg-mf-red text-center text-white tracking-widest capitalize rounded-full px-8 py-3'>
                explore projects
              </Link>
            </div>
          </div>
          <Image
            src={joinUsPage}
            alt='Join Us'
            className='max-lg:w-full object-contain'
            height='500'
            width='600'
            priority
          />
        </div>
      </section>
      <JoinUsSegmentSection
        title='getting started with'
        description="Here's a simple guide to help you navigate your way."
        data={joinUsGetStartSectionData}
        className='mb-24'
      />
    </>
  );
};

export default JoinUs;
