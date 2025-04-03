export const UpdateWorkSpace = ()=>{
    return(
        <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md w-[500px] ">
            
          <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center ">
            Update WorkSpace
          </h1>
          <form action="#" method="POST">
            {/* Cardholder Name */}
            <div className="mb-4">
              <input
                type="text"
                id="cardholder-name"
                name="name"
                placeholder="Web mini Peoject"
                className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                required=""
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-auto p-3 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}