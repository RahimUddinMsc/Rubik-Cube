import IRubikCube from "../interfaces/IRubikCube";
import IRubixPanel from "../interfaces/IRubikPanel";
import RubixPanel from "./RubikPanel";

class RubikCube implements IRubikCube {
  front: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
  right: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
  top: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
  back: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
  left: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
  bottom: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];

  constructor() {
    this.front = [
      [new RubixPanel('G', 'green'), new RubixPanel('G', 'green'), new RubixPanel('G', 'green')],
      [new RubixPanel('G', 'green'), new RubixPanel('G', 'green'), new RubixPanel('G', 'green')],
      [new RubixPanel('G', 'green'), new RubixPanel('G', 'green'), new RubixPanel('G', 'green')]
    ];

    this.top = [
      [new RubixPanel('W', 'white'), new RubixPanel('W', 'white'), new RubixPanel('W', 'white')],
      [new RubixPanel('W', 'white'), new RubixPanel('W', 'white'), new RubixPanel('W', 'white')],
      [new RubixPanel('W', 'white'), new RubixPanel('W', 'white'), new RubixPanel('W', 'white')]
    ];

    this.right = [
      [new RubixPanel('R', 'red'), new RubixPanel('R', 'red'), new RubixPanel('R', 'red')],
      [new RubixPanel('R', 'red'), new RubixPanel('R', 'red'), new RubixPanel('R', 'red')],
      [new RubixPanel('R', 'red'), new RubixPanel('R', 'red'), new RubixPanel('R', 'red')]
    ];

    this.bottom = [
      [new RubixPanel('Y', 'yellow'), new RubixPanel('Y', 'yellow'), new RubixPanel('Y', 'yellow')],
      [new RubixPanel('Y', 'yellow'), new RubixPanel('Y', 'yellow'), new RubixPanel('Y', 'yellow')],
      [new RubixPanel('Y', 'yellow'), new RubixPanel('Y', 'yellow'), new RubixPanel('Y', 'yellow')]
    ];

    this.left = [
      [new RubixPanel('O', 'orange'), new RubixPanel('O', 'orange'), new RubixPanel('O', 'orange')],
      [new RubixPanel('O', 'orange'), new RubixPanel('O', 'orange'), new RubixPanel('O', 'orange')],
      [new RubixPanel('O', 'orange'), new RubixPanel('O', 'orange'), new RubixPanel('O', 'orange')]
    ];

    this.back = [
      [new RubixPanel('B', 'blue'), new RubixPanel('B', 'blue'), new RubixPanel('B', 'blue')],
      [new RubixPanel('B', 'blue'), new RubixPanel('B', 'blue'), new RubixPanel('B', 'blue')],
      [new RubixPanel('B', 'blue'), new RubixPanel('B', 'blue'), new RubixPanel('B', 'blue')]
    ];
  }
}

export default RubikCube 