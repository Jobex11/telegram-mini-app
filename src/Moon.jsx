import "./index.css";
const Moon = () => {
  return (
    <div className="">
      {/* header*/}
      <div className="flex py-4 border-b border-gray-500 justify-around">
        <div className="moonbtn1 flex justify-center gap-3">
          <span>
            <img src="/images/moon.svg" alt="moon" />
          </span>
          <span>250</span>
        </div>
        <div className="moonbtn2 flex justify-center gap-3">
          <span>
            <img src="/images/mooner.svg" alt="mooner" />
          </span>
          <span>0</span>
        </div>
      </div>
      <div className="my-3 px-3 py-3">
        <div className="moonbtn3 flex justify-center items-center space-x-3">
          <img src="/images/mooner.svg" alt="mooner" />
          <span className="text-[#fff] text-sm">Mooner</span>
          <span>|</span>
          <span>Justin</span>
        </div>
        <div></div>
      </div>
      {/* 3 boxes */}
      <div className="flex justify-between p-3">
        <div className="moonbox flex flex-col justify-center items-center p-1 cursor-pointer">
          <div>
            <img src="/images/reward.svg" alt="reward" />
          </div>
          <div>Lucky Reward</div>
        </div>
        <div className="moonbox flex flex-col justify-center items-center p-2 cursor-pointer">
          <div>
            <img src="/images/gift.svg" alt="reward" />
          </div>
          <div>Daily Reward</div>
        </div>
        <div className="moonbox flex flex-col justify-center items-center p-2 cursor-pointer">
          <div>
            <img src="/images/board.svg" alt="reward" />
          </div>
          <div>Leader Board</div>
        </div>
      </div>
      <div className="flex justify-center py-3">
        <button className="moonbtn4">Trivia Quiz</button>
      </div>
    </div>
  );
};

export default Moon;
