import './App.css';

function App() {
  return (

<div className="w-[1440px] h-[2400px] pl-[220px] pt-20 bg-white flex-col justify-start items-center inline-flex">
  <div className="w-[1440px] h-20 p-5 left-0 top-0 absolute bg-white shadow justify-center items-center gap-5 inline-flex">
    <div className="grow shrink basis-0 text-center text-black text-[28px] font-medium font-['Roboto'] leading-9">멋쟁이사자처럼 with CUK</div>
    <div className="bg-white justify-center items-center gap-10 flex">
      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">달력</div>
      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">공지사항</div>
      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">전체회원</div>
      <div className="h-9 p-2 rounded-md border border-black/10 justify-end items-center gap-1 flex">
        <div className="grow shrink basis-0 text-black/50 text-sm font-normal font-['Roboto'] leading-tight">Search in site</div>
        <div className="w-5 h-5 relative" />
      </div>
    </div>
  </div>



  <div className="self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">멋쟁이사자처럼</div>
      <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">어서와 ~ 가톨릭대는 처음이지?</div>
    </div>
    <div className="grow shrink basis-0 h-[400px] justify-start items-start flex">
      <div className="h-[400px] relative bg-[#d8d8d8]/50">
        <img className="w-[400px] h-[400px] left-[2.42px] top-[-2.97px] absolute" src="https://via.placeholder.com/400x400" />
      </div>
    </div>
  </div>
  <div className="self-stretch h-[2320px] py-3 left-0 top-[80px] absolute bg-black/5 flex-col justify-start items-center flex">
    <div className="self-stretch px-5 py-4 justify-center items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative bg-black/5 rounded-xl">
        <div className="w-6 h-6 left-0 top-0 absolute text-center text-black text-[15px] font-normal font-['Roboto'] leading-normal">😃</div>
      </div>
      <div className="grow shrink basis-0 text-black text-base font-medium font-['Roboto'] leading-tight">개인 화면</div>
    </div>
    <div className="self-stretch px-5 py-4 justify-center items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative bg-black/5 rounded-xl">
        <div className="w-6 h-6 left-0 top-0 absolute text-center text-black text-[15px] font-normal font-['Roboto'] leading-normal">📅</div>
      </div>
      <div className="grow shrink basis-0 text-black text-base font-medium font-['Roboto'] leading-tight">멋사의 달력</div>
    </div>
    <div className="self-stretch px-5 py-4 justify-center items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative bg-black/5 rounded-xl">
        <div className="w-6 h-6 left-0 top-0 absolute text-center text-black text-[15px] font-normal font-['Roboto'] leading-normal">📢</div>
      </div>
      <div className="grow shrink basis-0 text-black text-base font-medium font-['Roboto'] leading-tight">공지사항</div>
    </div>
    <div className="self-stretch px-5 py-4 justify-center items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative bg-black/5 rounded-xl">
        <div className="w-6 h-6 left-0 top-0 absolute text-center text-black text-[15px] font-normal font-['Roboto'] leading-normal">👥</div>
      </div>
      <div className="grow shrink basis-0 text-black text-base font-medium font-['Roboto'] leading-tight">전체 회원</div>
    </div>
    <div className="self-stretch px-5 py-4 justify-center items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative bg-black/5 rounded-xl">
        <div className="w-6 h-6 left-0 top-0 absolute text-center text-black text-[15px] font-normal font-['Roboto'] leading-normal">📚</div>
      </div>
      <div className="grow shrink basis-0 text-black text-base font-medium font-['Roboto'] leading-tight">공부 자료 공유</div>
    </div>
    <div className="self-stretch px-5 py-4 justify-center items-center gap-3 inline-flex">
      <div className="w-6 h-6 relative bg-black/5 rounded-xl">
        <div className="w-6 h-6 left-0 top-0 absolute text-center text-black text-[15px] font-normal font-['Roboto'] leading-normal">🔗</div>
      </div>
      <div className="grow shrink basis-0 text-black text-base font-medium font-['Roboto'] leading-tight">영상 자료</div>
    </div>
  </div>

  

  
  <div className="self-stretch p-[60px] justify-center items-center gap-[60px] inline-flex">
    <div className="justify-center items-center gap-[60px] flex">
      <div className="w-[535px] self-stretch text-center text-black text-xl font-normal font-['Roboto'] leading-7">© 2024 멋쟁이사자처럼 가톨릭대. All Rights Reserved.</div>
    </div>
  </div>
</div>
  );
}

export default App;
