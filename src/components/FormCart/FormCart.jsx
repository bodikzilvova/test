import React from "react";
import { Form, Input, Label, Wrapper } from "./FormCart.styled";
import { useCart } from "../CartContext/CartContext";

function FormCart() {
  const { cartFormData, updateCartFormData } = useCart();

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateCartFormData({
      ...cartFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    updateCartFormData(cartFormData);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <Label htmlFor="name"> Name: </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={cartFormData.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email"> Email: </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={cartFormData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="phone"> Phone: </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={cartFormData.phone}
          onChange={handleChange}
          required
        />

        <Label htmlFor="address"> Address: </Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={cartFormData.address}
          onChange={handleChange}
          required
        />
      </Form>
    </Wrapper>
  );
}

export default FormCart;
