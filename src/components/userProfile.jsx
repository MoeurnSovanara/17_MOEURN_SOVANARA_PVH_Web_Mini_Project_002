// /components/UserProfile.js
import Image from "next/image";
import profile from "../../public/icon/profile.gif";
export default function UserProfile() {
  return (
    <div className="user-profile flex gap-6 py-2">
      <div className="w-14 h-14 bg-amber-200 rounded-[50%] border border-b-0">
        <Image src={profile} alt="image" className="h-full w-full rounded-[50%]"></Image>
      </div>
      <div>
        <p className="user-name font-bold">John Doe</p>
        <p className="user-email font-bold text-blue-300">johndoe@example.com</p>
      </div>
    </div>
  );
}
