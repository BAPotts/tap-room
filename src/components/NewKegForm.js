import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props){

    function handleNewKegFormSubmission(event) {
      event.preventDefault();
      props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pintsLeft: event.target.pintsLeft.value, id: v4()});
    }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
      <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type="text"
          name='price'
          placeholder='Price' />
        <input
          type="text"
          name="alcoholContent"
          placeholder="Alcohol Content" />
        <input
          type="number"
          name="pintsLeft"
          placeholder="Total Pints" />
        <button type='submit'>Add this Keg</button>
      </form>
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
    
};

export default NewKegForm;