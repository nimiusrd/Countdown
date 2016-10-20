<timer>
  <p>Seconds Elapsed: { time }</p>

  <script>
    this.time = opts.time || 0

    this.tick = () => {
      this.update({ time: ++this.time});
    }
    const timer = setInterval(this.tick, 1000);

    this.on('unmount', (evt) => {
      console.log(evt);
    })
  </script>
</timer>
