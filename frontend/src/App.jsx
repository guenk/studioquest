
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1 className="Titlerule">Rules: Design Studio Quest</h1>
        <p className="Intro">Hey, what's up !</p>
        <p>Welcome to Design Studio Quest.</p>
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
          To set up the game, follow these steps:
        </p>
        <ol>
          <li>Put the board with the arrow in the middle of the players.</li>
          <li>
            Make sure the question cards are in their respective boxes.
          </li>
          <li>The youngest player will play first.</li>
        </ol>
        <p className="Howtoplay">
          Here's how to play the game:
        </p>
        <ol>
          <li>
            The first player will spin the arrow and land on a topic. They have
            to answer a question related to that topic. Before answering, they
            can choose the difficulty of the question (easy, medium, or hard).
          </li>
          <li>
            If the player answers correctly, they win tokens based on the
            difficulty of the question (1 to 3 tokens).
          </li>
          <li>
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
      </section>
    </div>
  );
}
