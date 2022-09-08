import { useState } from "react";

/**
 *
 * @param key key for local storage
 * @param initialValue initial value to set for local storage
 * @returns [storedValue, setValue] where storedValue is value in local storage,
 * and setValue is a function to adjust the value in local storage
 */
const useLocalStorage = (
	key: string,
	initialValue: any
): [any, (value: any) => void] => {
	// isBrowser can be used to check if the window is undefined.
	// window is required for local storage to be utilized.
	const isBrowser = typeof window !== "undefined";

	// Set initial state to be used for local storage
	const [storedValue, setStoredValue] = useState(() => {
		// Check if local storage can be accessed.
		// Returns initialValue if it cannot.
		if (!isBrowser) return initialValue;

		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);

			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	// Get local storage value
	const setValue = (value: any) => {
		try {
			// Check whether value is a function.
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			// Save the value to the state
			setStoredValue(valueToStore);

			// Save to local storage if it can be accessed.
			if (isBrowser)
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
