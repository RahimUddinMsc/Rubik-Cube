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
      [new RubixPanel('G1', 'green'), new RubixPanel('G2', 'green'), new RubixPanel('G3', 'green')],
      [new RubixPanel('G4', 'green'), new RubixPanel('G5', 'green'), new RubixPanel('G6', 'green')],
      [new RubixPanel('G7', 'green'), new RubixPanel('G8', 'green'), new RubixPanel('G9', 'green')]
    ];

    this.top = [
      [new RubixPanel('W1', 'white'), new RubixPanel('W2', 'white'), new RubixPanel('W3', 'white')],
      [new RubixPanel('W4', 'white'), new RubixPanel('W5', 'white'), new RubixPanel('W6', 'white')],
      [new RubixPanel('W7', 'white'), new RubixPanel('W8', 'white'), new RubixPanel('W9', 'white')]
    ];

    this.right = [
      [new RubixPanel('R1', 'red'), new RubixPanel('R2', 'red'), new RubixPanel('R3', 'red')],
      [new RubixPanel('R4', 'red'), new RubixPanel('R5', 'red'), new RubixPanel('R6', 'red')],
      [new RubixPanel('R7', 'red'), new RubixPanel('R8', 'red'), new RubixPanel('R9', 'red')]
    ];

    this.bottom = [
      [new RubixPanel('Y1', 'yellow'), new RubixPanel('Y2', 'yellow'), new RubixPanel('Y3', 'yellow')],
      [new RubixPanel('Y4', 'yellow'), new RubixPanel('Y5', 'yellow'), new RubixPanel('Y6', 'yellow')],
      [new RubixPanel('Y7', 'yellow'), new RubixPanel('Y8', 'yellow'), new RubixPanel('Y9', 'yellow')]
    ];

    this.left = [
      [new RubixPanel('O1', 'orange'), new RubixPanel('O2', 'orange'), new RubixPanel('O3', 'orange')],
      [new RubixPanel('O4', 'orange'), new RubixPanel('O5', 'orange'), new RubixPanel('O6', 'orange')],
      [new RubixPanel('O7', 'orange'), new RubixPanel('O8', 'orange'), new RubixPanel('O9', 'orange')]
    ];

    this.back = [
      [new RubixPanel('B1', 'blue'), new RubixPanel('B2', 'blue'), new RubixPanel('B3', 'blue')],
      [new RubixPanel('B4', 'blue'), new RubixPanel('B5', 'blue'), new RubixPanel('B6', 'blue')],
      [new RubixPanel('B7', 'blue'), new RubixPanel('B8', 'blue'), new RubixPanel('B9', 'blue')]
    ];
  }
}

export default RubikCube 