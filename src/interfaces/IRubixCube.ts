import IRubixPanel from "./IRubixPanel"

interface IRubixCube {
    front: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]]
    right: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]]
    top: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]]
    back: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]]
    left: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]]
    bottom: [[IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel], [IRubixPanel,IRubixPanel,IRubixPanel]]
}

export default IRubixCube