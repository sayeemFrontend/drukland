import SignInForm from '@/components/forms/SignInForm';
import Image from 'next/image';
import ImageWrapper from './sections/ImageWrapper';

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-14">
      <div className="col-span-12 md:col-span-6 ">
        <ImageWrapper />
      </div>

      <div className="col-span-12 md:col-span-6">
        <SignInForm />
      </div>
    </div>
  );
}
