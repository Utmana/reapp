import React from 'react';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, 'Team']}>
          <List>
            <ListItem title="Stockholm" titleSub="343 medlemmar"/>
            <ListItem title="Iteam" titleSub="3 medlemmar"/>
          </List>
        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
});