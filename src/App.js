import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Shopping from "./containers/Shopping/Shopping";

import Account from "./containers/Account/Account";

// import Checkout from "./containers/Checkout/Checkout";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Shopping />} />
            <Route path="/account" element={<Account />} />

            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </Layout>
      </Router>
    );
  }
}

export default App;
