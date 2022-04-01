import './Home.scss';
import Navbar from './navbar';
import TextBody from './TextBody';
import Circle from './Circle';

const homeText = {
    pretitle: 'SO, YOU WANT TO TRAVEL TO',
    title: 'SPACE',
    text: 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!'
  }

function Home() {
    return (       
        <div className="Home">
            <Navbar></Navbar>
            <TextBody info={homeText}></TextBody>
            <Circle></Circle>
        </div>
    );
  }
  
  export default Home;