import './timer.tag';
import './message.tag';

<app>
  <timer due="2016-11-29 09:40:00"></timer>
  <message mg="Hello Timer!"></message>

  <script>
    this.tags.timer.on('mount', (e) => {
      console.log(e);
      console.log(this.tags.message);
    });
    this.tags.timer.on('before-mount', (e) => {
      console.log(this.tags.message);
    });
  </script>
</app>
