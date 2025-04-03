import Logo from "@/components/logo";
import Image from "next/image";
import AddIcon from "../../../../public/icon/addSquare.png";
import More from "../../../../public/icon/more.svg";
import Red from "../../../../public/icon/red.svg";
import Star from "../../../../public/icon/star.svg";
import Logout from "../../../../public/icon/logout.svg";
import { GetWorkSpaceService } from "../../../../Service/GetWorkSpaceService";
import arrowRight from "../../../../public/icon/arrowRight.svg";
import Link from "next/link";
import Notification from "../../../../public/icon/notification.png";
import Profile from "../../../../public/icon/profile.gif";
import CardComponent from "@/components/card";
export default async function DashboardPage() {
  const data = await GetWorkSpaceService();
  console.log("Data from GetWorkSpaceService", data);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex md:grid-cols-[300px_1fr] gap-4">
      <aside className="hidden w-[500px] bg-[#F8FAFC] md:block h-screen overflow-auto">
        <div className="p-10 text-2xl uppercase text-center tracking-wides">
          <a href="/">
            <Logo />
          </a>
        </div>
        <nav className="text-sm text-gray-300">
          <ul className="flex flex-col">
            <li className="px-4 cursor-pointer m-3">
              <div className="py-3 flex items-center justify-between">
                <h1 className="text-[#94A3B8] text-3xl font-bold">
                  Worksspace
                </h1>
                <Image
                  src={AddIcon}
                  alt="addicon"
                  onClick={openModal}
                  className="w-6 h-6 text-[#94A3B8] text-3xl"
                />
              </div>
            </li>

            <li className="px-4 cursor-pointer hover:bg-[#F8FAFC] m-3">
              {data.payload.map((item) => {
                return (
                  <div
                    key={item.workspaceId}
                    className="px-4 cursor-pointer hover:bg-[#94A3B8] m-3"
                  >
                    <a
                      className="py-3 flex items-center justify-between"
                      href="/"
                    >
                      <div className="flex items-center gap-2">
                        <h1 className="text-[#1E293B] mx-2 text-3xl font-bold">
                          {item.workspaceName}
                        </h1>
                      </div>
                      <Image src={More} alt="addicon" className="w-6 h-6" />
                    </a>
                  </div>
                );
              })}
            </li>
          </ul>

          <ul className="flex flex-col">
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

            <li className="px-4 cursor-pointer hover:bg-[#94A3B8] m-3">
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
          </ul>

          <a
            href="/"
            className="px-4 my-20 flex items-center gap-2 text-[#94A3B8] font-bold text-2xl"
          >
            <Image src={Logout} alt="logout" className="w-6 h-6" />
            Logout
          </a>
        </nav>
      </aside>

      <div className=" gap-4 p-10 w-full h-screen">
        <div className="grid grid-cols-12 w-full md:gap-4 px-10">
          <div className="col-span-6">
            <Link href="#" className="font-bold text-4xl inline-block">
              Workspace{" "}
            </Link>{" "}
            <Image
              src={arrowRight}
              alt="logout"
              className="inline-block w-10 mb-2"
            ></Image>
          </div>
          <div className="col-span-6 items-end place-self-end mt-[-20px]">
            <div className="flex gap-3 ">
              <Image
                src={Notification}
                alt="notification"
                className="w-10 h-10 mt-6"
              />
              <div className="w-20 h-20 rounded-[50%] flex items-center justify-center border border-b-2 border-amber-200">
                <Image
                  src={Profile}
                  alt="addicon"
                  className="w-full h-full text-[#94A3B8] text-3xl rounded-[50%]"
                />
              </div>
              <div className="py-4">
                <h1 className="font-bold text-2xl">Moeurn Sovanara</h1>
                <p className="font-black text-emerald-400">
                  pozzliik1280@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-amber-100 border border-b-0 text-gray-400"></div>
        <div className="px-10">
          <div className="grid grid-cols-12 gap-4 mt-3">
            <div className="col-span-6 flex items-center gap-4">
              <h1 className="text-3xl font-bold">WorkSpace</h1>
            </div>
            <div className="col-span-6 flex justify-end items-center gap-4">
              <Link
                href="/dashboard/addworkspace"
                className="bg-[#F8FAFC] text-[#94A3B8] font-bold text-xl py-2 px-4 rounded-lg"
              >
                <Image
                  src={Star}
                  alt="addicon"
                  className="w-10 h-10 text-[#94A3B8] text-3xl"
                ></Image>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-3 gap-16 px-10">
          <div className="col-span-4">
            <p className="text-[#F96666] py-2 font-bold">Not Started</p>
            <div className="border border-b-0 text-[#F96666]"></div>
          </div>
          <div className="col-span-4">
            <p className="text-[#4379F2] py-2 font-bold">In Progresa</p>
            <div className="border border-b-0 text-[#4379F2]"></div>
          </div>
          <div className="col-span-4">
            <p className="text-[#009990] py-2 font-bold">Not Started</p>
            <div className="border border-b-0 text-[#009990]"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-10 gap-16 px-10 bg-gray-50 rounded-[50px] h-[67vh] overflow-auto py-3">
          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>
          <div className="col-span-4">
            <CardComponent />
          </div>

          <div className="col-span-4">
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
