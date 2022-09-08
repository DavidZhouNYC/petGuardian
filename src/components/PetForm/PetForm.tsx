import React, { ChangeEvent, FC, FormEvent, MouseEvent, useState } from "react";
import {
	Button,
	TextField,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Grid,
} from "@mui/material";
import Modal from "../ui/Modal/Modal";
import useLocalStorage from "../../hooks/useLocalStorage";
import * as styles from "./PetForm.module.scss";

type PetFormType = {
	name: string;
	animal: string;
	zipCode: string;
};

type ModalCardProps = {
	onClose: () => void;
};

const defaultValues = {
	name: "",
	animal: "",
	zipCode: "",
};

const ConfirmationCard: FC<ModalCardProps> = ({ onClose }) => {
	return (
		<Modal onClose={onClose}>
			<div className={styles.cardUI}>
				<h2>Your pet information has been entered!</h2>
				<p>We will get back to you soon.</p>
			</div>
		</Modal>
	);
};

const LastEntry: FC<ModalCardProps> = ({ onClose }) => {
	const [localStorageValues, setLocalStorageValues] = useLocalStorage(
		"formValues",
		defaultValues
	);

	return (
		<Modal onClose={onClose}>
			<div className={styles.cardUI}>
				<h2>Here was your last entry (from local storage):</h2>
				<ul>
					<li>Name: {localStorageValues.name}</li>
					<li>Animal: {localStorageValues.animal}</li>
					<li>Zip Code: {localStorageValues.zipCode}</li>
				</ul>
			</div>
		</Modal>
	);
};

const NoLastEntry: FC<ModalCardProps> = ({ onClose }) => {
	return (
		<Modal onClose={onClose}>
			<h2>No last entry found!</h2>
		</Modal>
	);
};

const PetForm: FC = () => {
	const [localStorageValues, setLocalStorageValues] = useLocalStorage(
		"formValues",
		defaultValues
	);
	const [formValues, setFormValues] = useState<PetFormType>(defaultValues);
	const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
	const [showLastEntry, setShowLastEntry] = useState<boolean>(false);

	const openLastEntryHandler = (event: MouseEvent<HTMLButtonElement>) => {
		setShowLastEntry(true);
	};

	const closeModalHandler = () => {
		setShowConfirmation(false);
		setShowLastEntry(false);
	};

	const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues((formValues) => {
			return { ...formValues, [name]: value };
		});
	};

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent the browser from reloading on submit.
		setLocalStorageValues(formValues);
		setShowConfirmation(true);
	};

	return (
		<>
			{showConfirmation && (
				<ConfirmationCard onClose={closeModalHandler} />
			)}
			{showLastEntry &&
				(localStorageValues !== defaultValues ? (
					<LastEntry onClose={closeModalHandler} />
				) : (
					<NoLastEntry onClose={closeModalHandler} />
				))}
			<div className={styles.petFormUI}>
				<h2>Get a free quote today!</h2>
				<form onSubmit={submitHandler}>
					<Grid container spacing={0} alignItems='center'>
						<Grid item xs={12}>
							<TextField
								id='name-input'
								name='name'
								label='Name: '
								type='text'
								defaultValue={formValues.name}
								helperText="Who's the good boy/girl?"
								variant='filled'
								onChange={inputHandler}
								fullWidth
								required
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								id='zip-code-input'
								name='zipCode'
								label='Zip Code: '
								type='text'
								defaultValue={formValues.zipCode}
								helperText='US Residents only'
								onChange={inputHandler}
								variant='filled'
								fullWidth
								required
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControl>
								<FormLabel id='animal-input'>
									Pet Type:
								</FormLabel>
								<RadioGroup
									aria-labelledby='animal-radio-group'
									name='animal'
									onChange={inputHandler}
									row
								>
									<FormControlLabel
										value='Dog'
										control={<Radio required={true} />}
										label='Dog'
										defaultChecked={
											formValues.animal === "Dog"
										}
									/>
									<FormControlLabel
										value='Cat'
										control={<Radio required={true} />}
										label='Cat'
										defaultChecked={
											formValues.animal === "Cat"
										}
									/>
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid
							container
							item
							xs={12}
							justifyContent='space-between'
						>
							<Button
								variant='contained'
								color='primary'
								type='submit'
							>
								Submit
							</Button>
							<Button
								variant='contained'
								color='secondary'
								size='small'
								onClick={openLastEntryHandler}
							>
								View previous entry
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		</>
	);
};

export default PetForm;
