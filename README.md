# react-primitives-core

An alternative to [`react-primitives`](https://www.npmjs.com/package/react-primitives)
that exports some essential components for
[`react-native-web`](https://www.npmjs.com/package/react-native-web) and
[`react-native`](https://www.npmjs.com/package/react-native),
using [`react-universal-xp`](https://www.npmjs.com/package/react-universal-xp).
Includes text `Input` and `ScrollView` components.

**LICENSE:** [MIT LICENSE](./LICENSE)

Components supported:

- `Input` - wrapper for `TextInput` based on [`react-primitives-input`](https://www.npmjs.com/package/react-primitives-input) that ignores the `type` property
supports text input only
- `ScrollView`
- `Text`
- `Touchable` - exports `TouchableWithoutFeedback` which should be consistent with [`react-primitives`](https://www.npmjs.com/package/react-primitives)
- `View`

Note that it should be no problem to mix and match [`react-primitives`](https://www.npmjs.com/package/react-primitives) components and `react-primitives-core` components.
