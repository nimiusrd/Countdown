<message>
  <h1>{ message }</h1>

  <script>
    // get custom tags
    const app = this.parent
    const {timer, message} = app.tags
    const options = app.opts

    this.message = options.mg
  </script>
</message>
