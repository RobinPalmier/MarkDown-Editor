import React, { Fragment } from 'react';
import Header from './components/header/Header';
import EditorMD from './components/editor-md/EditorMD';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <EditorMD />
      <Footer />
    </Fragment>
  );
}

export default App;
