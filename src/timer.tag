<timer>

  <p>Seconds Elapsed: { time }</p>

  <script>
    this.time = opts.start || 0;

    function tick() {
      this.update({ time: ++this.time });
    }

    const timer = setInterval(this.tick, 1000);

    this.on('unmount', () => {
      clearInterval(timer);
    })
  </script>

</timer>
