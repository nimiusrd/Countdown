<timer>
  <p>Now Date: { now }</p>
  <p>Due Date: { due }</p>
  <p>diff second: { duration }</p>

  <script type="babel">
    const moment = require('moment');
    import "moment-duration-format"

    this.now = moment();
    this.due = moment(opts.due);

    const duration = moment.duration(this.due.diff(this.now));
    const format = 'YY/MM/DD HH:mm:ss';
    this.duration = duration.format(format);

    this.tick = () => {
      duration.subtract(1, 's');
      if (duration._milliseconds > 0) {
        this.update({
          duration: duration.format(format)
        })
      } else {
        this.unmount(true);
      }
    }

    const timer = setInterval(this.tick, 1000)

    this.on('unmount', (evt) => {
      console.log("byebye")
      clearInterval(timer)
    })
  </script>
</timer>
