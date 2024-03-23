import Image from "next/image";
import discussions from "@/mockdata/discussionData.json";
import Like from "../../public/assets/like.svg";
import Eye from "../../public/assets/eye.svg";
import Comment from "../../public/assets/comment.svg";
import Share from "../../public/assets/share.svg";


export default function DiscussionForum() {
  return (
    <div className="space-y-4 px-2 md:px-4">
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          className="flex flex-col gap-2 bg-white shadow rounded-md px-2 py-3"
        >
          <div className="flex items-start gap-4 lg:justify-between">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
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
                <p className=" px-2 py-1 bg-blue-900 text-xs rounded-full text-white">{discussion.sector}</p>
              </div>
              <p className="text-xs text-blue-900">{discussion.time}</p>
            </div>
              <p className="text-gray-700 text-sm">{discussion.content}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1 text-gray-500">
                <Image src={Like} alt="like icon" />
                {discussion.likes}
              </span>
              <span className="flex items-center gap text-gray-500">
               <Image src={Eye} alt="eye icon" />}
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
