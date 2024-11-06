import { useCallback, useEffect, useRef, useState } from "react";
import Portal, { createContainer } from "../portal/portal";
import CloseIcon from "./close.png";
import Styles from "./modal.module.css";

const MODAL_CONTAINER_ID = "modal-container-id";



const Modal = (props) => {
    const { title, onClose, children } = props;

    const rootRef = useRef(null);
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleWrapperClick = (event) => {
            const { target } = event;

            if (target instanceof Node && rootRef.current === target) {
                onClose?.();
            }
        };
        const handleEscapePress = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        window.addEventListener("click", handleWrapperClick);
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("click", handleWrapperClick);
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [onClose]);

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    return isMounted ? (
        <Portal id={'modal-container-id'}>
            <div className={Styles.wrap} ref={rootRef} data-testid="wrap">
                <div className={Styles.content}>
                    <button
                        type="button"
                        className={Styles.closeButton}
                        onClick={handleClose}
                        data-testid="modal-close-button"
                    >
                        <img src={CloseIcon} alt="close icon" />
                    </button>
                    {/* <p className={Styles.title}>{title}</p> */}
                    {children}
                </div>
            </div>
        </Portal>
    ) : null;
};

export default Modal;
