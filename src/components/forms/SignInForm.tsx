import Link from 'next/link';
import InfoIcon from '@/assets/icons/info.svg';
import Input from '../common/Input';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import FaceBookIcon from '@/assets/icons/facebook.svg';

export default function SignInForm() {
  return (
    <div className="w-full bg-white rounded-2xl p-[50px]">
      <div className="mb-6 text-center">
        <h2 className="mb-9 flex-1 text-[2rem] leading-10 text-[#0F0F0F] font-normal">
          Druklan d.de
        </h2>

        <p className="mb-1 text-2xl leading-7 text-[#0F0F0F]">
          Sign In to your account
        </p>
        <p className="mb-6 text-sm leading-[17px] text-[#292929]">
          Don’t you have an account?
          <Link href="" className="text-[#0F0F0F] text-base leading-5">
            Register
          </Link>
        </p>
        <p className="mb-6 flex items-center justify-center">
          <InfoIcon />
          <span className="ml-1 text-black text-xs leading-[14px]">
            Unknown email address. Try again!
          </span>
        </p>
      </div>
      <form action="">
        <div className=" mb-6">
          <Input
            label="Email Address"
            type="email"
            name="email"
            autoComplete="NA"
            className="input-primary"
          />
        </div>
        <div className="mb-6">
          <Input
            label="Password"
            type="password"
            name="password"
            className="input-primary"
          />
        </div>
        <div className="mb-1 flex items-center">
          <Input type="checkbox" name="is_marked" />
          <span className="ml-1 text-sm leading-[17px] font-normal text-[#292929]">
            I agree to all
            <span className="text-[#0B0B0B]"> Terms & Conditions</span>
          </span>
        </div>

        <div className="mb-1">
          <button
            type="submit"
            className="w-full rounded-[4px] bg-[#0F0F0F] text-base leading-5 text-[#EEEEEE] focus:bg-gray-600 focus:outline-none py-2.5"
          >
            Log In
          </button>
        </div>
        <p className="mb-1 flex items-center justify-between">
          <span className="w-full h-[1px] bg-[#0F0F0F]"></span>
          <span className="mx-2 text-center text-xs leading-[14px] text-[#0F0F0F] whitespace-nowrap">
            or sign in with
          </span>
          <span className="w-full h-[1px] bg-[#0F0F0F]"></span>
        </p>
        <ul className="flex items-center justify-center gap-1">
          <LinkedInIcon />
          <GoogleIcon />
          <FaceBookIcon />
        </ul>
      </form>
    </div>
  );
}
