import actionStyle from './../css/cubeAction.module.css'

const CubeActions = () => {
    return <>
        <div className={actionStyle.action_container}>

            <div className={actionStyle.left_action_container}>
                <button>
                    Explode
                </button>
            </div>
            <div className={actionStyle.middle_action_container}>
                <div className={actionStyle.middle_clockwise_actions}>
                    <button className="action-btn">F</button>
                    <button className="action-btn">R</button>
                    <button className="action-btn">U</button>
                    <button className="action-btn">B</button>
                    <button className="action-btn">L</button>
                    <button className="action-btn">D</button>                    
                </div>
                <div className={actionStyle.middle_anticlockwise_actions}>
                    <button className="action-btn">F'</button>
                    <button className="action-btn">R'</button>
                    <button className="action-btn">U'</button>
                    <button className="action-btn">B'</button>
                    <button className="action-btn">L'</button>
                    <button className="action-btn">D'</button>                    
                </div>
            </div>
            <div className={actionStyle.right_action_container}>
                <button>
                    Solve
                </button>
            </div>    
        </div>    
    </>
}

export default CubeActions;