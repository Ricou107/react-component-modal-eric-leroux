"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalComponent;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ModalComponent(_ref) {
  let {
    children
  } = _ref;
  const style = {
    position: 'fixed',
    zIndex: '2',
    backgroundColor: 'grey',
    width: '80%',
    margin: '0 calc(100% - 90%)',
    top: '15%',
    borderRadius: '10px'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    style: style
  }, children));
}