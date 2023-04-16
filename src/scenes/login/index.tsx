import Logo from "@/assets/iloveimg.svg";
import RightImage from "@/assets/iloveimg-right.png";
import { InboxIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "../navbar/Link";
import { SelectedPage } from "@/shared/types";
type Props = {};

const Login = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:840px)");
  const isBelow600Screens = useMediaQuery("(max-width:600px)");
  const fontSize = !isBelow600Screens ? "text-3xl" : "text-2xl";
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center align-middle">
        <div className="flex h-screen w-3/4 items-center justify-center align-middle">
          <div className="flex h-[340px] flex-col items-center gap-6">
            <div className="flex w-full items-center justify-center">
              <img src={Logo} />
            </div>
            <div
              className={`${fontSize} flex w-full items-center justify-center text-gray-400`}
            >
              <p>Login to your account</p>
            </div>
            <div className="flex w-full items-center justify-center gap-6">
              <button className="rounded-md bg-blue-900 px-10 py-2 text-white">
                {isAboveMediumScreens ? "Log in with Facebook" : "FB"}
              </button>
              <button className="rounded-md border border-red-500 px-10 py-2 text-black">
                {isAboveMediumScreens ? "Log in with Google" : "G"}
              </button>
            </div>
            <div className="relative flex w-full items-center">
              <div className="absolute left-2">
                <InboxIcon className="h-6 w-6 text-gray-400" />
              </div>
              <input
                className="w-full rounded-md border border-gray-400 p-2 pl-10"
                placeholder="Enter your email"
              ></input>
            </div>

            <div className="relative flex w-full items-center">
              <div className="absolute left-2">
                <LockClosedIcon className="h-6 w-6 text-gray-400" />
              </div>
              <input
                className="w-full rounded-md border border-gray-400 p-2 pl-10"
                placeholder="Password"
              ></input>
            </div>
            <div
              className={`flex w-full items-center justify-center text-gray-400`}
            >
              <a className="text-blue-400 underline" href="#">
                Forgot your password?
              </a>
            </div>
            <div className="flex w-full items-center justify-center">
              <button className="rounded-md bg-blue-400 px-5 py-2 text-white">
                Log in
              </button>
            </div>
            <div
              className={`flex w-full items-center justify-center gap-2 text-gray-400`}
            >
              <p>Don't have account?</p>
              <a className="text-blue-400 underline" href="#">
                Create an account
              </a>
            </div>
          </div>
        </div>
        {isAboveMediumScreens && (
          <div className="flex h-screen w-2/5 items-center justify-center bg-gray-200 align-middle text-black">
            <div className="mx-auto flex w-5/6 flex-col items-start gap-8">
              <img src={RightImage} />
              <p className="text-3xl font-bold">
                Your fast and simple photo editor
              </p>
              <p className="">
                iLoveIMG helps you compress, convert, crop and resize images
                easily. Enjoy a full suite of tools to batch edit multiple
                images online in seconds.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
