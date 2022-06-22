function parseName (string) {
  string = string.split(/\s/).join('')
  string = string.match(/^\{!\s*(.*)\s*\}$/)[1]
  const [type, name] = string.split('.')
  return { type, name }
}

export default class AuraRuntime {
  constructor ({ state, setState }) {
    this._state = state
    this._setState = setState
    this._attributes = []
    this._children = {}
  }

  _pushAttribute ({ props }) {
    this._attributes.push({
      name: props.name,
      type: props.type,
      defaultValue: props.defaultValue
    })
  }

  get (name) {
    const parsed = parseName(name)

    switch (parsed.type) {
      case 'v':
        return this._state[parsed.name]
    }
  }

  set (name, value) {
    const parsed = parseName(name)

    switch (parsed.type) {
      case 'v':
        this._setState({
          ...this._state,
          [parsed.name]: value
        })
        break
    }
  }

  find (name) {
    return this._children[name]
  }
}
