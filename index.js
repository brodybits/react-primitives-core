/** main import */
var universal = require('react-universal-xp')

/** helpers for Input */
var omit = require('object.omit')
var h = require('react').createElement

/** another helper for Input */
var TextInput = universal.TextInput

/** primitive components to be exported */
var View = universal.View
var ScrollView = universal.ScrollView
var Text = universal.Text
/** same as Touchable from react-primitives for now */
var Touchable = universal.TouchableWithoutFeedback

/** adapted from react-primitives-input */
function Input (props) {
  var type = props.type

  var propsWithoutType = omit(props, 'type')

  /* return <TextInput {...propsWithoutType} /> */
  return h(TextInput, propsWithoutType)
}

module.exports = {
  Input: Input,
  ScrollView: ScrollView,
  Text: Text,
  Touchable: Touchable,
  View: View
}
