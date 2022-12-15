function processData(callback) {
  fetchData(function (err, data) {
    if (err) {
      console.log('An error has occured. Abort everything!')
      callback(err, null) // here data will be null
    }
    data += 1
    callback(null, data) // here err will be null.
  })
}

processData(function (err, data) {
  err ? console.error(err) : console.log(data)
})
