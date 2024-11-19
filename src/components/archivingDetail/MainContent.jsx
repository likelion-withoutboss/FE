import arch_test from "../../image/arch_test.avif";
import { FaReact, FaNodeJs, FaSwift } from "react-icons/fa";
import { SiDjango, SiSpring } from "react-icons/si";

export default function MainContent() {
  const skill = ["react", "spring"];
  const people = ["나수아", "유지호", "박제영", "이윤성", "강지웅"];
  return (
    <div className="w-full p-4 border-2 rounded-2xl  space-y-4 shadow-lg bg-white">
      <img className="rounded-xl" src={arch_test} alt="x" />
      <p className="font-bold text-2xl">도를 닦자</p>
      <p className="">
        도를닦자프로젝트설명
        도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명{" "}
      </p>

      <p className="font-bold text-2xl">⚒️ 기술스택</p>
      <div className="flex flex-wrap space-x-2">
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

      <p className="font-bold text-2xl">⚒️ 팀원</p>
      <div className="flex flex-wrap space-x-2">
        {people.map((person, index) => (
          <div
            key={index}
            className="rounded-lg p-2 bg-gray-200 text-sm text-black w-auto"
          >
            {person}
          </div>
        ))}
      </div>
    </div>
  );
}
