const { Worklet } = require('react-native-bare-kit')

exports.spawn = function spawn(filename, source, args = []) {
  const worklet = new Worklet()
  worklet.start(filename, source, args)
  return worklet
}
