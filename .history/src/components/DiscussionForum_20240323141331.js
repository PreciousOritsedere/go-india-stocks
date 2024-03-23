import Image from "next/image";
import discussions from "@/mockdata/discussionData.json";

export default function DiscussionForum() {
  return (
    <div className="space-y-4 px-2 md:px-4">
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          className="flex flex-col gap-2 bg-white shadow rounded-md px-2 py-3"
        >
          <div className="flex items-start gap-4 lg:justify-between">
            <div className="w-[50px] h-[50px] rounded-[40px] overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-[40px]"
                src={discussion.image}
                alt={discussion.username}
              />
            </div>
            <div className="flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <div className="w-[70%] flex items-center gap-2.5">
                <p className="text-base font-semibold">{discussion.username}</p>
                <p className=" px-2 py-1 bg-blue-900 text-sm text-gray-500">{discussion.sector}</p>
              </div>
              <p className="text-sm text-gray-500">{discussion.time}</p>
            </div>
              <p className="text-gray-700 mt-1">{discussion.content}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-gray-500">
                <svg
                  className="h-6 w-6 fill-current text-red-500 mr-1"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  {/* heart icon */}
                </svg>
                {discussion.likes}
              </span>
              <span className="flex items-center text-gray-500">
                <svg
                  className="h-6 w-6 fill-current text-blue-500 mr-1"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  {/* eye icon */}
                </svg>
                {discussion.views}
              </span>
              <span className="text-gray-500">
                {discussion.comments} Comments
              </span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
