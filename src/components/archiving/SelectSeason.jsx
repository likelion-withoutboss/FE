import classNames from "classnames";

function SeasonSection({ text, selectedSeason, onHandleSelectSeason }) {
  return (
    <p
      className={classNames("text-2xl cursor-pointer", {
        "text-amber-500 font-bold": selectedSeason === text,
        "text-gray-300": selectedSeason !== text,
      })}
      onClick={() => onHandleSelectSeason(text)}
    >
      {text}
    </p>
  );
}

export default function SelectSeason({ selectedSeason, onHandleSelectSeason }) {
  return (
    <div className="flex space-x-5 mb-5 max-w-4xl mx-auto">
      <SeasonSection
        text="전체"
        selectedSeason={selectedSeason}
        onHandleSelectSeason={onHandleSelectSeason}
      />
      <SeasonSection
        text="11기"
        selectedSeason={selectedSeason}
        onHandleSelectSeason={onHandleSelectSeason}
      />
      <SeasonSection
        text="12기"
        selectedSeason={selectedSeason}
        onHandleSelectSeason={onHandleSelectSeason}
      />
    </div>
  );
}
