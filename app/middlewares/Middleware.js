import Vue from 'nativescript-vue'

export default class Middleware extends Vue {
	constructor(handler) {
		super({
			methods: {
				handler
			}
		})
	}
}
