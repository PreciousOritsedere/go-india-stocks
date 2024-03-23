import Image from "next/image";
import discussions from "@/mockdata/discussionData.json";

export default function DiscussionForum() {
  return (
    <div className="space-y-4 px-2 md:px-4">
      {discussions.map((discussion) => (
        <div key={discussion.id} className="bg-white shadow rounded-md p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={discussion.image}
                  alt={discussion.username}
                />
              </div>
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
         
      ))}
    </div>
  );
}
