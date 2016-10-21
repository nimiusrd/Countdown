<timer>
  <h1>{ duration }</h1>

  <script>
    // get custom tags
    const app = this.parent
    const {timer, message} = app.tags
    const options = app.opts

    // import moment.js
    const moment = require('moment')
    require('moment-duration-format')

    const now = moment()
    const due = moment(options.due)

    const duration = moment.duration(due.diff(now))
    const format = options.format || 'YY/MM/DD HH:mm:ss'
    this.duration = duration.format(format)

    this.tick = () => {
      if (duration._milliseconds > 1000) {
        duration.subtract(1, 's')
        this.update({
          duration: duration.format(format)
        })
      } else {
        clearInterval(t)
        this.unmount()
      }
    }

    const t = setInterval(this.tick, 1000)

    this.on('unmount', () => {
      const messageElem = message.root
      messageElem.style.display = 'block'
    })
  </script>
</timer>
