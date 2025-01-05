import { useState } from "react";
import ArchivingCard from "./ArchivingCard.tsx";
import SelectSeason from "./SelectSeason.jsx";
import Title from "../Title.tsx";

export default function MainContent() {
  const projectList = [
    {
      title: "도를닦자",
      description:
        "도를 닦자의 소개입니다 글씨가 길어지면 어캐되지 .. 제발 어캐되지ㅁㄴ엄ㄴ오ㅓ미너인멍ㅁㄴㅇㄴㅁ제발 어캐되지ㅁㄴ엄ㄴ오ㅓ미너인멍ㅁㄴㅇㄴㅁ제발 어캐되지ㅁㄴ엄ㄴ오ㅓ미너인멍ㅁㄴㅇㄴㅁ제발 어캐되지ㅁㄴ엄ㄴ오ㅓ미너인멍ㅁㄴㅇㄴㅁ",
      season: 11,
      skill: ["spring", "react", "swift"],
      like: false,
    },
    {
      title: "이윤성",
      description: "도를 이윤성",
      season: 11,
      skill: ["spring", "react"],
      like: true,
    },
    {
      title: "모여톤",
      description: "모여톤 ㅋㅋ",
      season: 12,
      skill: ["spring", "react"],
      like: true,
    },
    {
      title: "간지톤 누룽지",
      description: "헬스",
      season: 11,
      skill: ["swift", "nodejs"],
      like: true,
    },
    {
      title: "맥북에어",
      description: "애플 팀쿸쿠국무",
      season: 11,
      skill: ["spring", "react"],
      like: false,
    },
    {
      title: "확인",
      description: "체크",
      season: 11,
      skill: ["django", "react"],
      like: true,
    },
  ];

  const [selectedSeason, setSelectedSeason] = useState<string>("전체");

  const handleSelectedSeason = (season: string) => {
    setSelectedSeason(season);
  };

  const filteredProjects =
    selectedSeason === "전체"
      ? projectList
      : projectList.filter(
          (project) => project.season === Number(selectedSeason.split("기")[0])
        );

  return (
    <div className="max-w-4xl mx-auto ">
      <Title text="Project" />

      <SelectSeason
        selectedSeason={selectedSeason}
        onHandleSelectSeason={handleSelectedSeason}
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {filteredProjects.map((project) => (
          <ArchivingCard
            key={`${project.title}_${project.season}`}
            title={project.title}
            description={project.description}
            season={project.season}
            skill={project.skill}
            like={project.like}
          />
        ))}
      </div>
    </div>
  );
}
