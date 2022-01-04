import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import IndexPage from "../../pages/IndexPage";
import UserLinksPage from "../../pages/UserLinksPage";

function App(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="flex-shrink-0" role="main">
        <div className="container mt-5">
          <div className="row">
            {/* <IndexPage /> */}
            <UserLinksPage />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
