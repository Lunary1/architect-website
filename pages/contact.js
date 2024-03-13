import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const contact = () => {
  return (
    <section className="mt-[2rem]">
      <h1 className="text-4xl text-center uppercase">Contact</h1>
      <ContactForm />
      <Map />
    </section>
  );
};

export default contact;
