type CallBackError = Error | null
type CallBack = (error: CallBackError, response: Object) => void
type SendRequest = (cb: CallBack) => void

const sendRequest: SendRequest = (cb: CallBack) => {
  if (cb) {
    cb(null, {message: 'Everything is okey'})
  }
}

sendRequest((error, obj) => {
  if (error) {
    console.log('error')
  } else {
    console.log(obj)
  }
})