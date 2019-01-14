import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
import HomePage from '../imports/ui/Homepage.js';

import App from '../imports/ui/App.js'

FlowRouter.route('/', {
  name: 'Home',
  action(){
    mount( App, {
      content: <HomePage />
    })
  }
})