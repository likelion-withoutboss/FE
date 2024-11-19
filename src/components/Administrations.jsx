export default function Administrations() {
  // 이름 역할 깃허브링크 메일주소 사진
  const administrations = [
    {
      id: 1,
      name: "000해커톤 일정!",
      role: "아니 이게 뭐임",
      git: "",
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "000해커톤 일정!",
      role: "아니 이게 뭐임",
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "000해커톤 일정!",
      role: "아니 이게 뭐임",
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: 4,
      name: "000해커톤 일정!",
      role: "아니 이게 뭐임",
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: 5,
      name: "000해커톤 일정!",
      role: "아니 이게 뭐임",
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: 6,
      name: "000해커톤 일정!",
      role: "아니 이게 뭐임",
      imageUrl: "https://via.placeholder.com/80",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {administrations.map((administration) => (
          <div
            key={administration.id}
            className="bg-white p-4 rounded-lg shadow-lg flex items-center"
          >
            <img
              src={administration.imageUrl}
              alt="포스트 썸네일"
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-boldBlack">
                {administration.name}
              </h3>
              <p className="text-gray-600 text-sm">{administration.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
