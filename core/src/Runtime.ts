function logged(value, { kind, name }) {
	if (kind === "method") {
		return function (...args) {
			console.log(`starting ${name} with arguments ${args.join(", ")}`);
			const ret = value.call(this, ...args);
			console.log(`ending ${name}`);
			return ret;
		};
	}
}

export class Runtime {
	readonly #test: string;

	constructor(test: unknown) {
		this.#test = test as string;
	}

	@logged
	async foo(): Promise<void> {
		console.log(this.#test);
	}
}
