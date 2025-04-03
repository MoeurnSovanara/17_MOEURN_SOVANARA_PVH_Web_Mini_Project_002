// export const AddWorkSpaceUI = async (formData) => {
//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen ">
//         <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-[500px] ">
//           <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center ">
//             Create new WorkSpace
//           </h1>
//           <form action="#" method="POST">
//             {/* Cardholder Name */}
//             <div className="mb-4">
//               <input
//                 type="text"
//                 id="cardholder-name"
//                 name="name"
//                 placeholder="please type your workspace name"
//                 className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                 required=""
//               />
//             </div>
//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-auto p-3 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { X, PlusCircle } from "lucide-react"; // Import an icon

export const AddWorkSpaceUI = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        <PlusCircle size={20} />
        Add Workspace
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-[500px] relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Create New Workspace
            </h1>

            <form action="#" method="POST">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Please type your workspace name"
                  className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-auto px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
