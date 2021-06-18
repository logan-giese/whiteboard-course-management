import React from 'react';
import UserServiceTest from './UserServiceTest';

// Test page to demonstrate and test the firebase service functions
function ServiceTestPage() {
  return <div className="content">
      <h1>Service Tests</h1>
      <table>
          <tr>
              <td style={{width: "340px", borderRight: "1px dashed black", padding: "12px"}}>
                  <UserServiceTest />
              </td>
              <td style={{width: "340px", borderRight: "1px dashed black", padding: "12px"}}>
                  <h3>Course test goes here</h3>
              </td>
              <td style={{width: "340px", padding: "12px"}}>
                  <h3>Assignment test goes here</h3>
              </td>
          </tr>
      </table>
    </div>;
}

export default ServiceTestPage;
