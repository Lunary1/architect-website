// pages/privacy-policy.js

import React from "react";
import Layout from "../components/Layout";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. It is our policy to respect your
        privacy regarding any information we may collect from you across our
        website.
      </p>

      <h2 className="text-xl font-bold mb-2">Information We Collect</h2>

      <p className="mb-4">
        We only collect information about you if we have a reason to do so–for
        example, to provide our services, to communicate with you, or to make
        our services better.
      </p>

      <h2 className="text-xl font-bold mb-2">How We Use Information</h2>

      <p className="mb-4">
        We use the information we collect in various ways, including to: -
        Provide, operate, and maintain our website - Improve, personalize, and
        expand our website - Understand and analyze how you use our website
      </p>

      <h2 className="text-xl font-bold mb-2">Sharing of Information</h2>

      <p className="mb-4">
        We may share personal information as necessary to fulfill our business
        obligations or to comply with legal requirements.
      </p>

      <h2 className="text-xl font-bold mb-2">Cookies</h2>

      <p className="mb-4">
        We use cookies to store information about visitors preferences, to
        record user-specific information on which pages the site visitor
        accesses or visits, and to personalize or customize our web page content
        based upon visitors browser type or other information that the visitor
        sends via their browser.
      </p>

      <p className="mb-4">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
