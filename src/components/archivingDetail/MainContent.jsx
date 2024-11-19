import arch_test from "../../image/arch_test.avif";

export default function MainContent() {
  return (
    <div className="w-full p-4 border-2 rounded-2xl  space-y-4 shadow-lg bg-white">
      <img className="rounded-xl" src={arch_test} alt="x" />
      <p className="font-bold text-2xl">도를 닦자</p>
      <p className="">
        도를닦자프로젝트설명
        도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명도를닦자프로젝트설명{" "}
      </p>

      <div className="space-y-1">
        <p className="font-bold text-2xl">⚒️ 기술스택</p>
        <div className="flex flex-wrap">
          <div className="rounded-lg p-1 bg-gray-200 text-sm text-black w-auto">
            react{" "}
          </div>
          <div className="rounded-lg p-1 bg-gray-200 text-sm text-black w-auto">
            spring
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <p className="font-bold text-2xl">⚒️ 팀원</p>
        <div className="flex flex-wrap">
          <div className="rounded-lg p-1 bg-gray-200 text-sm text-black w-auto">
            react{" "}
          </div>
          <div className="rounded-lg p-1 bg-gray-200 text-sm text-black w-auto">
            spring
          </div>
        </div>
      </div>
    </div>
  );
}
