import React, { Fragment } from "react";
import "../../src/index.css";
import NavBar from "./layout/NavBar";
import Footer from "../components/layout/Footer";
import Form from "../components/Form";
import CategoriesProvider from "../context/CategoriesContext";
import RecipesProvider from "../context/RecipesProvider";

const Home = () => {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <Fragment>
          <NavBar />
          <Form></Form>
          <Footer />
        </Fragment>
      </RecipesProvider>
    </CategoriesProvider>
  );
};

export default Home;
