import SignInForm from '@/components/forms/SignInForm';
import ImageWrapper from './sections/ImageWrapper';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <ImageWrapper />
      </div>

      <div className="w-max place-content-center mx-auto">
        <SignInForm />
      </div>
    </div>
  );
}
