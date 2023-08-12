import React from 'react';

import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID="080dbe83-1788-49fb-8a6a-97de13ba2069"
      userName='TravelWorld'
      userSecret='Travel@123'
      height='calc(100vh - 12px)'
    />
  );
}

export default SupportAdmin;
