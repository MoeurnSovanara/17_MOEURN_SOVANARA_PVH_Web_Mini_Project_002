import Logo from "@/components/logo";
import Image from "next/image";
import AddIcon from "../../../../public/icon/addSquare.png";
import More from "../../../../public/icon/more.svg";
import Red from "../../../../public/icon/red.svg";
import Blue from "../../../../public/icon/blue.svg";
import Green from "../../../../public/icon/green.svg";
import Purple from "../../../../public/icon/purple.svg";
import Star from "../../../../public/icon/star.svg";
import Logout from "../../../../public/icon/logout.svg";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { GetWorkSpaceService } from "../../../../Service/GetWorkSpaceService";
export default async function DashboardPage() {
  return (
    <aside className="hidden w-96 bg-amber-300 md:block min-h-screen overflow-auto">
      <div className="p-10 text-2xl uppercase text-center tracking-wides">
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav className="text-sm text-gray-300">
        <ul className="flex flex-col bg-green-700">
          <li className="px-4 cursor-pointer m-3">
            <div className="py-3 flex items-center justify-between">
              <h1 className="text-[#94A3B8] text-3xl font-bold">Worksspace</h1>
              <Image
                src={AddIcon}
                alt="addicon"
                className="w-6 h-6 text-[#94A3B8] text-3xl"
              />
            </div>
          </li>
          <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3 bg-amber-200">
            <a className="py-3 flex items-center justify-between" href="/">
              <div className="flex items-center gap-2">
                <Image src={Red} alt="elilpse3" className="w-5 h-4" />
                <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                  HRD Design
                </h1>
              </div>
              <Image src={More} alt="addicon" className="w-6 h-6" />
            </a>
          </li>
          <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3 bg-amber-600">
            <a className="py-3 flex items-center justify-between" href="/">
              <div className="flex items-center gap-2">
                <Image src={Blue} alt="elilpse3" className="w-5 h-4" />
                <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                  HRD Design
                </h1>
              </div>
              <Image src={More} alt="addicon" className="w-6 h-6" />
            </a>
          </li>
          <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3 bg-blue-400">
            <a className="py-3 flex items-center justify-between" href="/">
              <div className="flex items-center gap-2">
                <Image src={Green} alt="elilpse3" className="w-4 h-4" />
                <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                  HRD Design
                </h1>
              </div>
              <Image src={More} alt="addicon" className="w-6 h-6" />
            </a>
          </li>
          <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3 bg-yellow-100">
            <a className="py-3 flex items-center justify-between" href="/">
              <div className="flex items-center gap-2">
                <Image src={Purple} alt="elilpse3" className="w-4 h-4" />
                <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                  HRD Design
                </h1>
              </div>
              <Image src={More} alt="addicon" className="w-6 h-6" />
            </a>
          </li>
        </ul>

        <ul className="flex flex-col bg-green-800">
          <li className="px-4 cursor-pointer m-3 ">
            <div className="py-3 flex items-center justify-between">
              <h1 className="text-[#94A3B8] text-3xl font-bold">Favorite</h1>
              <Image
                src={Star}
                alt="addicon"
                className="w-6 h-6 text-[#94A3B8] text-3xl"
              />
            </div>
          </li>

          <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3 bg-amber-400">
            <a className="py-3 flex items-center justify-between" href="/">
              <div className="flex items-center gap-2">
                <Image src={Red} alt="elilpse3" className="w-4 h-4" />
                <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                  HRD Design
                </h1>
              </div>
              <Image src={More} alt="addicon" className="w-6 h-6" />
            </a>
          </li>
          <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3 bg-amber-600">
            <a className="py-3 flex items-center justify-between" href="/">
              <div className="flex items-center gap-2">
                <Image src={Blue} alt="elilpse3" className="w-4 h-4" />
                <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                  HRD Design
                </h1>
              </div>
              <Image src={More} alt="addicon" className="w-6 h-6" />
            </a>
          </li>
        </ul>

        <a
          href="/"
          className="px-4 my-20 flex items-center gap-2 text-[#94A3B8] font-bold text-2xl"
        >
          <Image src={Logout} alt="logout" className="w-6 h-6" />
          Logout
        </a>
         {
          
         }
      </nav>
    </aside>
  );
}
