import IRubixCube from "../interfaces/IRubixCube";
import IRubixPanel from "../interfaces/IRubixPanel";
import RubixPanel from "./RubixPanel";

class RubixCube implements IRubixCube {
    front: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
    right: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
    top: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
    back: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
    left: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
    bottom: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]];
  
    constructor() {
      this.front = [
        [new RubixPanel('G', 'Green'), new RubixPanel('G', 'Green'), new RubixPanel('G', 'Green')],
        [new RubixPanel('G', 'Green'), new RubixPanel('G', 'Green'), new RubixPanel('G', 'Green')],
        [new RubixPanel('G', 'Green'), new RubixPanel('G', 'Green'), new RubixPanel('G', 'Green')]
      ];
  
      this.top = [
        [new RubixPanel('W', 'White'), new RubixPanel('W', 'White'), new RubixPanel('W', 'White')],
        [new RubixPanel('W', 'White'), new RubixPanel('W', 'White'), new RubixPanel('W', 'White')],
        [new RubixPanel('W', 'White'), new RubixPanel('W', 'White'), new RubixPanel('W', 'White')]
      ];
  
      this.right = [
        [new RubixPanel('R', 'Red'), new RubixPanel('R', 'Red'), new RubixPanel('R', 'Red')],
        [new RubixPanel('R', 'Red'), new RubixPanel('R', 'Red'), new RubixPanel('R', 'Red')],
        [new RubixPanel('R', 'Red'), new RubixPanel('R', 'Red'), new RubixPanel('R', 'Red')]
      ];
  
      this.bottom = [
        [new RubixPanel('Y', 'Yellow'), new RubixPanel('Y', 'Yellow'), new RubixPanel('Y', 'Yellow')],
        [new RubixPanel('Y', 'Yellow'), new RubixPanel('Y', 'Yellow'), new RubixPanel('Y', 'Yellow')],
        [new RubixPanel('Y', 'Yellow'), new RubixPanel('Y', 'Yellow'), new RubixPanel('Y', 'Yellow')]
      ];
  
      this.left = [
        [new RubixPanel('O', 'Orange'), new RubixPanel('O', 'Orange'), new RubixPanel('O', 'Orange')],
        [new RubixPanel('O', 'Orange'), new RubixPanel('O', 'Orange'), new RubixPanel('O', 'Orange')],
        [new RubixPanel('O', 'Orange'), new RubixPanel('O', 'Orange'), new RubixPanel('O', 'Orange')]
      ];
  
      this.back = [
        [new RubixPanel('B', 'Blue'), new RubixPanel('B', 'Blue'), new RubixPanel('B', 'Blue')],
        [new RubixPanel('B', 'Blue'), new RubixPanel('B', 'Blue'), new RubixPanel('B', 'Blue')],
        [new RubixPanel('B', 'Blue'), new RubixPanel('B', 'Blue'), new RubixPanel('B', 'Blue')]
      ];
    }
}
  