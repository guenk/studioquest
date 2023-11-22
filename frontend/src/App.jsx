
import "./App.css";
import logo from "./assets/log.png";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";

export default function App() {
  return (
    <div className="App">
      
      <section className="App-header">
        <div className="cont">
      <img src={logo} className="logo" alt="logo" />
      </div>
        <h1 className="Titlerule"> 
        
        Rules
        </h1>
        <p className="Intro">Hey, what's up !</p>
        <p>
          Welcome to Design Studio Quest.</p>
        <p>
          In this game, you play the role of a new graphic designer who wants
          to create their own graphics studio by purchasing equipment and
          improving their skills.
        </p>
        <p>
          Make your dream graphics studio by working hard every day and buying
          all the necessary items!
        </p>
        <p className="Preparation">
          To set up the game, follow these steps :
        </p>
        <ol>
          <li>Put the board with the arrow in the middle of the players.</li>
          <li>
            Make sure the question cards are in their respective boxes.
          </li>
          <li>The youngest player will play first.</li>
        </ol>
        <p className="Howtoplay">
          Here's how to play the game :
        </p>
        <ol>
          <li>
          <img src={one} className="one" alt="one" />
            The first player will spin the arrow and land on a topic. They have
            to answer a question related to that topic. Before answering, they
            can choose the difficulty of the question (easy, medium, or hard).
          </li>
          <li>
          <img src={two} className="two" alt="two" />
            If the player answers correctly, they win tokens based on the
            difficulty of the question (1 to 3 tokens).
          </li>
          <li>
          <img src={three} className="three" alt="three" />
            On each turn, the player can choose to either use their tokens to
            buy an item or spin the arrow to answer a question. They cannot do
            both, but they can buy 2 items in the same turn (not 3 or more).
          </li>
          <li>
            The game continues until a player collects all the necessary items
            to win the game.
          </li>
        </ol>
        <p className="Notabene">
          Note: You can also choose to play without buying items if you just
          want to have fun answering questions!
        </p>
        <table border="1">
  <tr>
    <th className="items">Items</th>
    <th className="points">Points</th>
  </tr>
  <tr>
    <td className="bord">Plant</td>
    <td className="po">1 point</td>
  </tr>
  <tr>
    <td className="bord">Office chair</td>
    <td className="po">2 points</td>
  </tr>
  <tr>
    <td className="bord">Desk</td>
    <td className="po">2 points</td>
  </tr>
  <tr>
    <td className="bord">PC</td>
    <td className="po">3 points</td>
  </tr>
  <tr>
    <td className="bord">Graphic table</td>
    <td className="po">3 points</td>
  </tr>
  <tr>
    <td className="bord">Adobe creative cloud</td>
    <td className="po">4 points</td>
  </tr>
</table>
        
      </section>
    </div>
  );
}
