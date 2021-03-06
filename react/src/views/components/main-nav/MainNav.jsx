import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import MenuNavLink from './components/MenuNavLink';
import RouteEnum from '../../../constants/RouteEnum';

export default class MainNav extends React.PureComponent {
  render() {
    return (
      <Segment inverted={true}>
        <Menu inverted={true} pointing={true} secondary={true}>
          <Menu.Item as={MenuNavLink} to={RouteEnum.Note} name="Note" />
          <Menu.Item as={MenuNavLink} to={RouteEnum.Tag} name="Tag" />
        </Menu>
      </Segment>
    );
  }
}
