
import Link from "next/link";
import Image from "next/image";
import arrowRight from "../../../../public/icon/arrowRight.svg"
import { GetWorkSpaceService } from "../../../../Service/GetWorkSpaceService";
import CardComponent from "@/components/card";
import Sidebar from "@/components/sideBar";
import UserProfile from "@/components/userProfile";
import Star from "../../../../public/icon/star.svg"

export default async function DashboardPage() {
  const data = await GetWorkSpaceService();
  console.log("Data from GetWorkSpaceService", data);

  return (
    <div className="flex md:grid-cols-[300px_1fr] gap-4">
      {/* Sidebar */}
      <Sidebar workspaces={data.payload}/>

      {/* Main Content */}
      <div className="gap-4 p-10 w-full h-screen">
        {/* Header */}
        <div className="grid grid-cols-12 w-full md:gap-4 px-10">
          <div className="col-span-6">
            <Link href="#" className="font-bold text-4xl inline-block">
              Workspace{" "}
            </Link>
            <Image src={arrowRight} alt="arrow" className="inline-block w-10 mb-2" />
          </div>
          <div className="col-span-6 place-self-end mt-[-20px]">
            <UserProfile />
          </div>
        </div>

        <div className="w-full bg-amber-100 border border-b-0 text-gray-400"></div>

        {/* Workspace List */}
        <div className="px-10">
          <div className="grid grid-cols-12 gap-4 mt-3 px-5">
            <div className="col-span-6 flex items-center gap-4">
              <h1 className="text-3xl font-bold">WorkSpace</h1>
            </div>
            <div className="col-span-6 flex justify-end items-center gap-4">
               <Image src={Star} alt="imageStar" className="w-8 h-8"></Image>
            </div>
           
          </div>
        </div>

        {/* Status Section */}
        <div className="grid grid-cols-12 mt-3 gap-16 px-10">
          <div className="col-span-4">
            <p className="text-[#F96666] py-2 font-bold">Not Started</p>
            <div className="border border-b-0 text-[#F96666]"></div>
          </div>
          <div className="col-span-4">
            <p className="text-[#4379F2] py-2 font-bold">In Progress</p>
            <div className="border border-b-0 text-[#4379F2]"></div>
          </div>
          <div className="col-span-4">
            <p className="text-[#009990] py-2 font-bold">Completed</p>
            <div className="border border-b-0 text-[#009990]"></div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-12 mt-10 gap-16 px-10 bg-gray-50 rounded-[50px] h-[67vh] overflow-auto py-3">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="col-span-4">
              <CardComponent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

