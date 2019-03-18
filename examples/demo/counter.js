export class Counter extends odoo.core.Component {
  inlineTemplate = `
    <div>
      <button t-on-click="increment(-1)">-</button>
      <span style="font-weight:bold">Value: <t t-esc="state.counter"/></span>
      <button t-on-click="increment(1)">+</button>
    </div>`;
  constructor(parent, props) {
    super(parent, props);
    this.state = {
      counter: props.initialState || 0
    };
  }

  increment(delta) {
    this.setState({ counter: this.state.counter + delta });
  }
}
