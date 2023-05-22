// eslint-disable-next-line
// @ts-ignore
import Storage from 'vue-ls'
const options = {
	namespace: 'vue3_admin', // key prefix
	name: 'ls', // name variable Vue.[ls] or this.[$ls],
	storage: 'local' // storage name session, local, memory
}
export const { ls } = Storage.useStorage(options)
export default ls
