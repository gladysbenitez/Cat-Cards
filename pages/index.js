import Deck from "@/components/Deck";
import { Title } from '../styled/DeckStyles';


function Home() {
  return (
    <div className="App">
        <Title>Deck title</Title>
        <Deck/>
    </div>
  );
}


export default Home;