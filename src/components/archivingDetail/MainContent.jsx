import aurum from "../../image/AURUM.jpg";
import { FaReact, FaNodeJs, FaSwift, FaGithub, FaLink } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import { SiDjango, SiSpring } from "react-icons/si";
import Icon from "./Icon.tsx";

export default function MainContent() {
  const skill = ["react"];
  const people = ["장광진", "서은", "박지원", "오혁준", "김채연"];
  return (
    <div className="w-full p-4 border-2 rounded-2xl  space-y-4 shadow-lg bg-white">
      <img className="rounded-xl mx-auto" src={aurum} alt="x" />
      <p className="font-bold text-2xl">
        아우름제 X 가톨릭대학교 멋쟁이사자처럼
      </p>
      <p className="">
        멋쟁이 사자처럼 11기 프론트엔드 개발팀에서 개발한 2023 아우름제 축제
        페이지입니다.
      </p>

      <p className="font-bold text-2xl">⚒️ 기술스택</p>
      <div className="flex flex-wrap space-x-2">
        {skill.map((skillItem, index) => (
          <div
            key={index}
            data-tip={skillItem}
            className="tooltip rounded-lg p-2 bg-g  ray-200 text-sm text-black w-auto"
          >
            {skillItem === "react" && <FaReact color="blue" size="30" />}
            {skillItem === "spring" && <SiSpring color="green" size="26" />}
            {skillItem === "nodejs" && <FaNodeJs color="green" size="26" />}
            {skillItem === "swift" && <FaSwift color="orange" size="26" />}
            {skillItem === "django" && <SiDjango color=" #006400" size="26" />}
          </div>
        ))}
      </div>

      <p className="font-bold text-2xl">🧑🏻‍💻👩🏻‍💻 팀원</p>
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
      <p className="font-bold text-2xl">🔗 링크</p>
      <div className="flex flex-wrap space-x-2">
        <Icon
          href="https://github.com/CUK-LikeLion-Festival/festival_front"
          icon={FaGithub}
        />
        <Icon icon={FaSquareInstagram} />
        <Icon icon={FaLink} />
      </div>
    </div>
  );
}
