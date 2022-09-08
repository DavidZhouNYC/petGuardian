import React, { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import * as styles from "./Modal.module.scss";

type BackdropProps = {
	onClose: () => void;
};

type ModalOverlayProps = {
	children: ReactNode;
};

interface ModalProps extends BackdropProps, ModalOverlayProps {}

const Backdrop: FC<BackdropProps> = ({ onClose }) => {
	return <div className={styles.backdropUI} onClick={onClose}></div>;
};

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
	return <div className={styles.modalOverlayUI}>{children}</div>;
};

const Modal: FC<ModalProps> = ({ onClose, children }) => {
	const portalElement = document.getElementById("overlays")!;

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClose={onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
