<message>
  <div class="countdown-message">{ message }</div>

  <script>
    // get custom tags
    const app = this.parent
    const {timer, message} = app.tags
    const options = app.opts

    // import moment.js
    const moment = require('moment')

    const now = moment()
    const afterDue = moment(options.afterDue)

    this.message = now.isAfter(afterDue) ? options.afterMg : options.mg
  </script>
</message>
