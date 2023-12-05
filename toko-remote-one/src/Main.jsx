import React, { Suspense, } from "react";
import {Link, Routes, Route, } from "react-router-dom"
import "./index.scss";
const ROUTES = [
	{
		path: '/product',
		element: <Main />,
	},
];


const App = (props) => {
  return(
      <Routes>
        {ROUTES?.map((item) => {
          return <Route key={item.path} index path={item?.path} element={<Suspense fallback={<span>Loading...</span>}>{item?.element}</Suspense>} />;
        })}
      </Routes>
  );
}

const Main = (props) => {
    return(
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <div>Name: toko-remote-one</div>
                <div>Framework: react</div>
                <div>Language: JavaScript</div>
                <div>CSS: Tailwind</div>
                <Link to="/product/test">test</Link>
                <Link to="/" >Back home</Link>
            </div>
    )
};

export default App;