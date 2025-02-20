import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    // const [isOpen, setIsOpen] = useState(false);
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
                // setIsOpen(true);
            },
            // close(){
            //     setIsOpen(false);
            // }
        };
    });

    return createPortal(
        <dialog ref={ dialog } className="result-modal" onClose={ onReset }>
            { userLost && <h2>You Lost!</h2> }
            { !userLost && <h2>Your Score: { score }</h2> }
            <p>The target time was <strong> { targetTime } seconds. </strong></p>
            <p>You stopped the timer with <strong> { formattedRemainingTime } seconds left. </strong></p>
            <form method="dialog" onSubmit={ onReset }>
                <button>Close</button>
            </form>
        </dialog>, 
        document.getElementById("modal")

        // <>
        // {
        //     isOpen &&     
        //     <div ref={ dialog } className="result-modal">
        //         <h2>You {result}</h2>
        //         <p>The target time was <strong> { targetTime } seconds. </strong></p>
        //         <p>You stopped the timer with <strong> X seconds left. </strong></p>
        //         <form method="dialog">
        //             <button onClick={ () => setIsOpen(false) }>Close</button>
        //         </form>
        //     </div>
        // }
        // </>

    );
})
export default ResultModal;