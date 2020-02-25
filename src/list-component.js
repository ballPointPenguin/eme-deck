import React from 'react';
import PropTypes from 'prop-types';
import { UnorderedList, ListItem } from 'spectacle';

const List = ({ minus }) => {
  return (
    <div style={{ display: 'flex' }}>
    <UnorderedList>
      <ListItem>
        Ember-CLI
      </ListItem>
      <ListItem>
        Blueprints
      </ListItem>
      <ListItem>
        Addons
      </ListItem>
      <ListItem>
        Tests
      </ListItem>
      <ListItem>
        Broccoli Pipeline
      </ListItem>
    </UnorderedList>
    <UnorderedList>
      <ListItem>
        Fastboot Server
      </ListItem>
      <ListItem>
        Router
      </ListItem>
      <ListItem>
        Glimmer components
      </ListItem>
      <ListItem>
        Handlebars templatse
      </ListItem>
    </UnorderedList>
      {minus ? (
        <UnorderedList>
          <ListItem>
            Community
          </ListItem>
          <ListItem>
            Learning Resources
          </ListItem>
          <ListItem>
            Events
          </ListItem>
          <ListItem>
            People
          </ListItem>
        </UnorderedList>
      ) : (
        <UnorderedList>
          <ListItem>
            Data layer
          </ListItem>
          <ListItem>
            Oh, and ... Ember.js
          </ListItem>
        </UnorderedList>
      )}
    </div>
  );
};

List.propTypes = {
  minus: PropTypes.string
}

export default List;
