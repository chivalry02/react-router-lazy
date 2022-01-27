import React, { Component } from 'react';

/*
  import AsyncComponent from '../component/router/asyncComponent'
  // import Index from '../pages/Index'
  const Index = AsyncComponent(()=>import('../pages/Index'));
*/
export default function AsyncComponent(importantComponent) {
  class _AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    componentDidMount() {
      importantComponent().then((mod) => {
        this.setState({
          component: mod.default || mod,
        });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return _AsyncComponent;
}
