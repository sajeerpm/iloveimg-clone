import Logo from "@/assets/iloveimg.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  Bars3Icon,
  ChevronDownIcon,
  WrenchIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {};

const Navbar2 = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1080px)");
  const isAboveSmallScreens = useMediaQuery("(min-width:840px)");
  // const isBelowMobileScreens = useMediaQuery("(min-width:600px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  return (
    <nav>
      <div className="fixed top-0 h-[60px] w-full bg-white shadow-md">
        <div className="flex h-[60px] items-center justify-between gap-16">
          <div className="flex items-center justify-between">
            {isAboveSmallScreens ? (
              <div className="mx-10 flex w-[120px] items-center justify-start">
                <img src={Logo} />
              </div>
            ) : (
              <div className="flex w-full items-center justify-between gap-16">
                <div
                  className="mx-2 flex h-[61px] items-center p-2"
                  onMouseEnter={() => setIsMenuToggled(!isMenuToggled)}
                  onMouseLeave={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <div className="rounded-full bg-gray-500 p-2">
                    <WrenchIcon className="h-4 w-4 text-white" />
                    {isMenuToggled && (
                      <div className="absolute left-0 top-[61px] z-[1000] flex max-h-[85vh] min-w-[300px] flex-col items-start justify-start bg-white p-2 shadow-md hover:block group-hover:block">
                        <p className="cursor-pointer p-2 font-normal hover:text-hove-text-400">
                          Compress Image
                        </p>
                        <p className="cursor-pointer p-2 font-normal hover:text-hove-text-400">
                          Resize Image
                        </p>
                        <p className="cursor-pointer p-2 font-normal hover:text-hove-text-400">
                          Crop Image
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <img className=" w-[120px]" src={Logo} />
              </div>
            )}
            {isAboveMediumScreens ? (
              <div className="flex items-center justify-between gap-10 text-sm uppercase">
                <p className="cursor-pointer font-normal hover:text-hove-text-400">
                  Compress Image
                </p>
                <p className="cursor-pointer font-normal hover:text-hove-text-400">
                  Resize Image
                </p>
                <p className="cursor-pointer font-normal hover:text-hove-text-400">
                  Crop Image
                </p>
              </div>
            ) : isAboveSmallScreens ? (
              <div
                className="group relative flex h-[60px] flex-col items-center justify-center gap-10 text-sm uppercase"
                onMouseEnter={() => setIsMenuToggled(!isMenuToggled)}
                onMouseLeave={() => setIsMenuToggled(!isMenuToggled)}
              >
                <span className="flex cursor-pointer items-center justify-start font-normal hover:text-hove-text-400">
                  <p>All Tools</p>
                  <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                </span>
                {isMenuToggled && (
                  <div className="absolute left-0 top-[61px] z-[1000] flex max-h-[85vh] min-w-[300px] flex-col items-start justify-start bg-white p-2 shadow-md hover:block group-hover:block">
                    <p className="cursor-pointer p-2 font-normal hover:text-hove-text-400">
                      Compress Image
                    </p>
                    <p className="cursor-pointer p-2 font-normal hover:text-hove-text-400">
                      Resize Image
                    </p>
                    <p className="cursor-pointer p-2 font-normal hover:text-hove-text-400">
                      Crop Image
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {isAboveSmallScreens || isAboveMediumScreens ? (
            <div className="flex items-center justify-between">
              <div className="flex h-[60px] cursor-pointer items-center bg-gray-20 px-4 hover:bg-gray-700 hover:text-white">
                <p>Log In</p>
              </div>
              <div className="flex h-[60px] cursor-pointer items-center bg-blue-400 px-4 hover:bg-gray-700 hover:text-white">
                <p>Sign Up</p>
              </div>
              <div className="flex h-[60px] cursor-pointer items-center bg-white px-4">
                <Bars3Icon className="h-6 w-6 text-black" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex h-[60px] cursor-pointer items-center bg-blue-400 px-4 hover:bg-gray-700 hover:text-white">
                <UserCircleIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex h-[60px] cursor-pointer items-center bg-white px-4">
                <Bars3Icon className="h-6 w-6 text-black" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
