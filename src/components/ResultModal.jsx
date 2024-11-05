import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    // const [isOpen, setIsOpen] = useState(false);
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);

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

    return (
        <dialog ref={ dialog } className="result-modal">
            { userLost && <h2>You Lost!</h2> }
            { !userLost && <h2>You Won!</h2> }
            <p>The target time was <strong> { targetTime } seconds. </strong></p>
            <p>You stopped the timer with <strong> { formattedRemainingTime } seconds left. </strong></p>
            <form method="dialog" onSubmit={ onReset }>
                <button>Close</button>
            </form>
        </dialog>

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