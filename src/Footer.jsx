import "./App.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const navigateMoon = () => {
    navigate("/");
  };
  const navigateGame = () => {
    navigate("/game");
  };
  const navigateTasks = () => {
    navigate("/tasks");
  };

  const navigateFriends = () => {
    navigate("/friends");
  };

  const navigateWallet = () => {
    navigate("/wallet");
  };

  return (
    <div className="flex bg-[#1B1A18]">
      <div
        onClick={navigateMoon}
        className="footerbox  flex flex-col justify-center items-center space-y-2 m-2 hover:border-2 rounded-md cursor-pointer hover:border-[#fad210] "
      >
        <div>
          <img src="/images/moon.svg" alt="moon" />
        </div>
        <div>Moon</div>
      </div>
      <div
        onClick={navigateTasks}
        className="footerbox flex flex-col justify-center items-center space-y-2 m-2 hover:border-2 rounded-md cursor-pointer hover:border-[#fad210]"
      >
        <div>
          <img src="/images/task.svg" alt="tasks" />
        </div>
        <div>Tasks</div>
      </div>
      <div
        onClick={navigateGame}
        className="footerbox flex flex-col justify-center items-center space-y-2 m-2 hover:border-2 rounded-md cursor-pointer hover:border-[#fad210]"
      >
        <div>
          <img src="/images/game.svg" alt="game" />
        </div>
        <div>Game</div>
      </div>
      <div
        onClick={navigateFriends}
        className="footerbox  flex flex-col justify-center items-center space-y-2  m-2 hover:border-2 rounded-md cursor-pointer hover:border-[#fad210]"
      >
        <div>
          <img src="/images/friend.svg" alt="friend" />
        </div>
        <div>Friends</div>
      </div>
      <div
        onClick={navigateWallet}
        className="footerbox  flex flex-col justify-center items-center space-y-2   m-2 hover:border-2 rounded-md cursor-pointer hover:border-[#fad210]"
      >
        <div>
          <img src="/images/wallet.svg" alt="wallet" />
        </div>
        <div>Wallet</div>
      </div>
    </div>
  );
};

export default Footer;
