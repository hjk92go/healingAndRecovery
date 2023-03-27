import { createContext, useState } from "react";

const ScriptFile = createContext();
const DataProvider = ({ children }) => {
  //script file
  const [script, setScript] = useState([
    {
      count: 1,
      type: "인생",
      comment:
        "멋진 모험을 함께해줘서 고마워요 이젠 당신의 새로운 모험을 떠나봐요 사랑해요",
      author: "업",
    },
    {
      count: 2,
      type: "위로",
      comment: "하쿠나 마타타! '걱정하지마'라는 뜻이야",
      author: "라이온 킹",
    },
    {
      count: 3,
      type: "위로",
      comment: "네 안을 들여다 보렴. 넌 네가 생각하는 것보다 더 큰 존재란다.",
      author: "라이온 킹",
    },
    {
      count: 4,
      type: "위로",
      comment: "누군가를 위해서 기꺼이 녹아줄 수 있어",
      author: "겨울왕국",
    },
    {
      count: 5,
      type: "위로",
      comment: "네가 어디를 가든 나는 너와 함께 있단다.",
      author: "모아나",
    },
    {
      count: 6,
      type: "인생",
      comment: "지나온 길을 통해 현재의 위치를 아는 거지.",
      author: "모아나",
    },
    {
      count: 7,
      type: "인생",
      comment: "어떤 일이 닥쳐도 난 길을 찾을 거야",
      author: "모아나",
    },
    {
      count: 8,
      type: "인생",
      comment:
        "비록 그것이 특별하지 않더라도 \n네가 그것이 특별하다고 믿는다면, 특별해지는 거야.",
      author: "쿵푸 팬더",
    },
    {
      count: 9,
      type: "인생",
      comment: "오늘의 특별한 순간들이 내일의 축억들이야.",
      author: "알라딘",
    },
    {
      count: 10,
      type: "인생",
      comment: "거짓으로 얻는 게 많을수록 진짜로 얻는 것은 적어지지",
      author: "알라딘",
    },
    {
      count: 11,
      type: "위로",
      comment: "내 소원은 네가 자유로워지는 거야.",
      author: "알라딘",
    },
    {
      count: 12,
      type: "위로",
      comment: "무언가를 할 수 없다는 게 중요한게 아냐, 무얼 할 수 있느냐지.",
      author: "보노보노",
    },
    {
      count: 13,
      type: "인생",
      comment: "무한한 공간, 저 너머로!",
      author: "토이스토리",
    },
    {
      count: 14,
      type: "사랑",
      comment: "누군가를 사랑하고자 한다면 너 자신을 먼저 사랑해",
      author: "미녀와 야수",
    },
    {
      count: 15,
      type: "인생",
      comment: "역경을 이겨내고 핀 꽃이 가장 아름다운 꽃이란다.",
      author: "뮬란",
    },
    {
      count: 16,
      type: "위로",
      comment: "왜 이유없이 웃을 수 있냐구요? 당신이 그 이유이니까요",
      author: "라이온 킹",
    },
    {
      count: 17,
      type: "인생",
      comment:
        "그렇게 구경만 하다간, 네 인생이 너 없이 흘러가는 걸 구경하게 될 걸",
      author: "노틀담의 꼽추",
    },
    {
      count: 18,
      type: "인생",
      comment: "세상이 널 힘들게 할 땐 신경 끄고 사는 게 상책이야.",
      author: "라이온 킹",
    },
    {
      count: 19,
      type: "위로",
      comment: "나는 최소한 내가 즐겁다고 생각하는게 즐겁다.",
      author: "곰돌이 푸",
    },
    {
      count: 20,
      type: "위로",
      comment: " 매일 행복할 순 없지만, 행복한 것들은 매일 있어.",
      author: "곰돌이 푸",
    },
    {
      count: 21,
      type: "위로",
      comment: "넌 이 세상 어떤 것보다 의미 있어 나한텐",
      author: "피터팬",
    },
    {
      count: 22,
      type: "인생",
      comment: "거짓말이 거짓말을 만든다.",
      author: "피노키오",
    },
    {
      count: 23,
      type: "인생",
      comment: "최고의 순간은 갑자기 찾아오는 거야.",
      author: "니모를 찾아서",
    },
    {
      count: 24,
      type: "인생",
      comment: "젊게 사는 건 절대 늦은 나이란 없어",
      author: "백설공주",
    },
    {
      count: 25,
      type: "위로",
      comment:
        "기억하세요, 당신이야말로 세상을 빛으로 채울 수 있는 사람이라는 걸요",
      author: "백설공주",
    },
    {
      count: 26,
      type: "희망",
      comment: "난 지금 잠깐 넘어졌지만 다시 일어날 거야.",
      author: "밤비",
    },
    {
      count: 27,
      type: "사랑",
      comment: "사랑은 끝나지 않는 노래야.",
      author: "밤비",
    },
    {
      count: 28,
      type: "인생",
      comment: "널 억누르던 것들이 널 일으켜 줄 거야",
      author: "맘보",
    },
    {
      count: 29,
      type: "인생",
      comment: "행복이 네가 있는 곳에 있다는 걸 깨닫게 되는 날이 올 거야.",
      author: "모아나",
    },
    {
      count: 30,
      type: "인생",
      comment: "과거는 아플 수 있어.",
      author: "라이온 킹",
    },
    {
      count: 31,
      type: "성공",
      comment: "누구든 무엇이든 될 수 있어.",
      author: "주토피아",
    },
    {
      count: 32,
      type: "위로",
      comment: "난 더 이상 숨지 않고, 오늘을 즐기며 최선을 다할 거야",
      author: "코코",
    },
    {
      count: 33,
      type: "위로",
      comment: "너의 가족이 널 얼마나 사랑하는지 잊지마.",
      author: "코코",
    },
    {
      count: 34,
      type: "인생",
      comment: "익숙한 곳을 벗어나서 모험해",
      author: "라푼젤",
    },
    {
      count: 35,
      type: "인생",
      comment: "난 내 삶의 모든 순간을 살아갈 거야",
      author: "소울",
    },
    {
      count: 36,
      type: "성공",
      comment: "인생은 가능성으로 가득 차 있어",
      author: "소울",
    },
    {
      count: 37,
      type: "위로",
      comment: "내 기분은 내가 정해, 오늘은 행복이야.",
      author: "이상한 나라의 앨리스",
    },
    {
      count: 38,
      type: "위로",
      comment: "이번 일이 끝나면 모든 것이 달라질 거야.",
      author: "겨울왕국",
    },
    {
      count: 39,
      type: "위로",
      comment: "한 사람의 마음을 채우는 것은 가끔은 아주 작은 것들이야.",
      author: "곰돌이 푸",
    },
    {
      count: 40,
      type: "위로",
      comment: "날 나답게 만드는 일들이 날 특별하게 만들어",
      author: "곰돌이 푸",
    },
    {
      count: 41,
      type: "위로",
      comment: "진정한 친구는 미소 속에 가려진 눈물을 보는거야",
      author: "곰돌이 푸",
    },
    {
      count: 42,
      type: "인생",
      comment: "너가 좋아하는 것을 하고, 너가 하는 것을 사랑하렴",
      author: "라푼젤",
    },
    {
      count: 43,
      type: "인생",
      comment: "꿈은 도망가지 않아. 도망가는 것은 언제나 자신이야",
      author: "짱구는 못말려",
    },
    {
      count: 44,
      type: "위로",
      comment: "너에게는 아직 꿈을 이루기 위한 충분한 시간이 있어!",
      author: "피터팬",
    },
    {
      count: 45,
      type: "위로",
      comment: "잘못된 일에만 너무 신경 쓰지마. 항상 되돌릴 방법은 있어!",
      author: "인사이드아웃",
    },
    {
      count: 46,
      type: "인생",
      comment: "눈 감지 말고 똑바로 봐, 두려움의 실체는 생각보다 다를 수 있어.",
      author: "니모를 찾아서",
    },
    {
      count: 47,
      type: "위로",
      comment: "삶은 조금씩 실수투성이야. 우리는 항상 실수하지.",
      author: "주토피아",
    },
    {
      count: 48,
      type: "위로",
      comment:
        "당신이 어떤 종류의 동물이든 간에, 당신으로부터 변화가 시작돼요.",
      author: "주토피아",
    },
    {
      count: 49,
      type: "위로",
      comment:
        "자책하지마, 너무 빠르게 달릴 필요 없어.\n때때로 우리가 맨 마지막으로 왔을지라도 너는 최선을 다한거야.",
      author: "주토피아",
    },
    {
      count: 50,
      type: "위로",
      comment: "넌 이미 우리에게 축복을 받았어 아무 조건 없이",
      author: "코코",
    },
  ]);
  const value = {
    state: { script },
    action: { setScript },
  };
  return <ScriptFile.Provider value={value}> {children}</ScriptFile.Provider>;
};

export { DataProvider };
export default ScriptFile;
