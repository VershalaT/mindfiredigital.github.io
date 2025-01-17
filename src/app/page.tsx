import TypeAnimationWrapper from "@/components/shared/TypeAnimationWrapper";
import Image from "next/image";
import particleAnimation from "../../public/images/particle_animation_optimised.gif";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col-reverse items-center lg:flex-row justify-between px-6 pr-12 py-12'>
      <div className='max-w-2xl mt-7'>
        <div className='text-mf-dark font-bold text-3xl tracking-wider leading-10'>
          Igniting Innovation through Open Source Collaboration: Mindfire |{" "}
          <TypeAnimationWrapper
            sequence={[
              "FOSS", // initially rendered starting point
              2000,
              "",
            ]}
          />
          {/* <span className="text-mf-red animate-typing">FOSS</span> */}
        </div>
        <div className='text-mf-light-grey text-lg leading-6 mt-4 mb-10'>
          A community pushing boundaries through open source projects, fostering
          an ecosystem of transparency, learning, and impactful technology.
        </div>
        <Link
          href='/projects'
          className='text-white bg-mf-red font-medium text-base rounded-full px-6 py-3 text-center tracking-wide'>
          Explore Projects
        </Link>
      </div>
      <Image
        src={particleAnimation}
        height='410'
        width='410'
        alt='particle_animation'
        priority
      />
    </div>
  );
}
