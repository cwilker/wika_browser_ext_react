import { c as createCommonjsModule, a as commonjsGlobal } from '../common/_commonjsHelpers-16be0a9e.js';
import { c as core } from '../common/core-0301bfac.js';

var encUtf8 = createCommonjsModule(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core);
	}
}(commonjsGlobal, function (CryptoJS) {

	return CryptoJS.enc.Utf8;

}));
});

export default encUtf8;
