export default function validate(values) {
  const validator = {
    email: val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val),
    phone: val =>
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(val),
    name: val => val.length > 3,
    message: val => val.length > 3,
  }

  const valid = {}

  Object.keys(values).map(field => {
    valid[field] = validator[field](values[field])
  })

  return valid
}
