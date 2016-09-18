import React from 'react';
import TextField from 'material-ui/TextField';

// TODO: use this place autoComplete
// https://github.com/ubilabs/react-geosuggest

const ShippingAddressForm = () => (
  <div>
    <TextField
        hintText="John Smith"
        floatingLabelText="Name"
        autoComplete="name" /* this does not work yet!! - find a new implementation */
        required
      /><br/>
    <TextField
        hintText="123 Main St, Los Angeles, CA"
        floatingLabelText="Address"
        autoComplete="shipping street-address"
        required
      />
  </div>
);

export default ShippingAddressForm;
