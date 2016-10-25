<message>
  <div class="countdown-message">{ message }</div>

  <script>
    // get custom tags
    const app = this.parent
    const {timer, message} = app.tags
    const options = app.opts

    // import moment.js
    const moment = require('moment')
    require('moment-duration-format')

    const now = moment()
    const afterDue = moment(options.afterDue)
    console.log(afterDue);
    console.log();

    this.message = now.isBefore(afterDue) ? options.afterMg : options.mg
  </script>
</message>
