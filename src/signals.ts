type Callback = () => unknown;

let currentListener: Callback | null;

export const createSignal = <T>(value: T) => {
	const listeners = new Set<Callback>();

	const get = () => {
		if (currentListener) {
			listeners.add(currentListener);
		}

		return value;
	};

	const set = (newValue: T) => {
		value = newValue;

		for (const listener of listeners) {
			listener();
		}
	};

	return [get, set] as const;
};

export const createEffect = (callback: Callback) => {
	const invokeListener = () => {
		currentListener = invokeListener;

		try {
			callback();
		} catch {
            console.error('The callback provided inside the effect failed');
        }
	};

	invokeListener();
};
