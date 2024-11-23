import arch_test from "../../image/arch_test.avif";
import { FaThumbsUp } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa6";
import cx from "classnames";
import { FaReact, FaNodeJs, FaSwift } from "react-icons/fa";
import { SiDjango, SiSpring } from "react-icons/si";

export default function ArchivingCard({
  title,
  description,
  season,
  skill,
  like,
}) {
  return (
    <div className="w-80 h-auto p-4 border-2 rounded-2xl  space-y-4 shadow-lg bg-white cursor-pointer hover:-translate-y-2 hover:duration-500">
      {/* 프로젝트 소개 */}
      <div className="relative">
        <img
          className=" w-full h-full object-cover rounded-xl "
          src={arch_test}
          alt="x"
        />
        <div
          className={cx(
            { "bg-amber-500 hover:bg-amber-600": like }, // like가 true일 때 bg-amber-500을 적용
            "absolute top-2 right-2 text-2xl text-white p-2 rounded-lg cursor-pointer hover:bg-gray-400 bg-gray-300"
          )}
        >
          {like ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <p className="">{title}</p>
          <p className="text-light text-sm">{season}기</p>
        </div>
        <div className="text-gray-700 truncate ">{description}</div>
        <div className="flex space-x-2">
          {skill.map((skillItem, index) => (
            <div
              key={index}
              className="rounded-lg p-2 bg-gray-200 text-sm text-black w-auto"
            >
              {skillItem === "react" && <FaReact />}
              {skillItem === "spring" && <SiSpring />}
              {skillItem === "nodejs" && <FaNodeJs />}
              {skillItem === "swift" && <FaSwift />}
              {skillItem === "django" && <SiDjango />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
