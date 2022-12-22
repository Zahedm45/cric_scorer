import React from 'react';
import css from './Style.module.css';

/*The design of the User Interface.*/
class Layout extends React.Component {
  render() {
    return (
        <div className={css.layout}>
          {this.props.children}
        </div>
    )
  }
}

export default Layout;
