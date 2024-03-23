import Image from "next/image";
import discussions from "@/mockdata/discussionData.json";

export default function DiscussionForum() {
  return (
    <div className="space-y-4 px-2 md:px-4">
      {discussions.map((discussion) => (
        <div key={discussion.id} className="bg-white shadow rounded-md p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="rounded-full h-10 w-10"
                src="/path-to-avatar.jpg"
                alt={discussion.username}
              />
              <div className="ml-4">
                <div className="text-lg font-semibold">
                  {discussion.username}
                </div>
                <div className="text-sm text-gray-500">{discussion.sector}</div>
                <p className="text-gray-700 mt-1">{discussion.content}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">{discussion.time}</div>
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
