'use client';
import Image from 'next/image';
import blueDog from '../../public/blue.png';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const goToContact = () => {
    router.push('/contact');
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-60 h-60 bg-white rounded-full mt-12  hover:shadow-lg">
          <Image fill src={blueDog} alt="profile" />
        </div>
        <span className="px-2 py-1 mt-4">Hi !</span>
        <span className="px-2 py-1 ">FrontEnd Engineer</span>
        <span className="px-2 py-1  ">프론트엔드 개발자입니다</span>
        <button
          onClick={goToContact}
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 mt-8"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
