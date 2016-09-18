import React from 'react';
import TextField from 'material-ui/TextField';



const ShippingAddressForm = () => (
  <div>
    <TextField
        hintText="John Smith"
        floatingLabelText="Name"
        autoComplete="name" /* this does not work yet!! - find a new implementation */
      /><br/>
    <TextField
        hintText="123 Main St, Los Angeles, CA"
        floatingLabelText="Address"
      />
  </div>
);

export default ShippingAddressForm;
