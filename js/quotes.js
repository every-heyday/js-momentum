const quotes = [
  {
    quote:
      "상처와 고통, 비극이 우리에게 노래하고 사랑하고 긍정할 기회이기를.\n",
    author: "- 양효실 <불구의 삶, 사랑의 말>",
  }, {
    quote: "다른 누군가처럼 되고 싶다는 생각을 하지 않는 건, 기분 좋아! \n 일기도 계속 쓰지 못했지만 복어도 먹어본 적 없지만 '나'라서 좋아.\n",
    author: "- 마스다 미리 <지금 이대로 괜찮은 걸까?>",
  },
  {
    quote: "눈에 보이는 가능성보다 한 뼘 나서서 나를 먼저 믿어주길. 밑도 끝도 없이 믿어주기.\n",
    author: "- 김민지 <마음에도 근육이 붙나 봐요>",
  },
  {
    quote: "하루아침에 뒤집어지는 혁명보다 더 어려운 것이 끈질기게 물고 늘어지는 일상을 바꾸는 것이다. \n 그래서 변화는 오랜 시간과 인내를 필요로 한다.\n",
    author: "- 김소연 <미치지도 죽지도 않았다>",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
