const storeMode = function(obj, initialState = {}) {
	if(!obj) {
		throw new Error('obj must be required!');
	}
	this.obj = obj;
	this.states = {
		msg: 'HAHAHA'
	};
	for(let prop in initialState) {
		if(initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
			this.states[prop] = initialState[prop];
		}
	}
}

storeMode.prototype.mutations = {
	setMsg(states, handleMsg) {
		// this.states = {...states, handleMsg}
		this.states.msg = handleMsg;
	}
}

storeMode.prototype.commit = function(name, ...args) {
	const mutations = this.mutations;
	console.log('emit--'+ name);
	if(mutations[name]) {
		mutations[name].apply(this, [this.states].concat(args));
	}else {
		throw new Error('Action not be found--' + name);
	}
}

export default storeMode;