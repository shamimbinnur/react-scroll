import './App.css';
import * as Scroll from 'react-scroll';
import { scrollTo, Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    
  }, [])

  Events.scrollEvent.register("begin", (to, element)=>{
    console.log("Begin", to, element);
  })
  
  Events.scrollEvent.register("end", (to, element)=>{
    console.log("End", to, element);
  })
  

  return (
    <div className="App">
      <div className="nav">
        <Link duration={500} smooth to="firstElement">
          First
        </Link>
        <Link duration={500} smooth to="secondElement">
          Second
        </Link>
        <Link duration={500} smooth to="thirdElement">
          Third
        </Link>
        <Link duration={500} smooth to="fourthElement">
          fourth
        </Link>
      </div>

      
      <Element  name="firstElement" className="element1">
        First element
      </Element>

      <Element id="secondElement" className="element2">
        Second element
      </Element>

      <Element name="thirdElement"  className="element3">
        Third element
      </Element>
      <Element onClick={()=> scroll.scrollToTop()}  name="fourthElement" className="element4">
        Third element
      </Element>
    </div>
  );
}

export default App;
