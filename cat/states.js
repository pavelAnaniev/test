
export class Cat {
  state = {
    sleep: true,
    meows: false,
  }
  wake() {
    this.state.sleep = false;
  }
  meowing() {
    if(!this.state.sleep) {
      this.state.meows = true;
    }
  }
  stopMeowing() {
    this.state.meows = false;
  }
  sleep() {
    if(!this.state.meows) {
      this.state.sleep = true;
    }
  }
}