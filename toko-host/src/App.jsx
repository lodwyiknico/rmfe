import React, { Suspense, lazy } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const Product = lazy(() => import('toko_remote_one/app'));
const Profile = lazy(() => import('toko_remote_two/app'));
import "./index.scss";

const Main = () => {
  return(
    <div className="m-10 flex flex-col">
      <div className="text-3xl bg-red-50">
        <div>Name: toko-host</div>
      </div>
      <div className="m-5 flex flex-col">
        <Link to="/product">Product</Link>
        <Link className="mt-5" to="/profile">Profile</Link>
      </div>
    </div>
  )
}

const ROUTES = [
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/product',
		element: <Product />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
];

const App = () => {
  return (
    <div>
      <Routes>
        {ROUTES?.map((item) => {
          return <Route key={item.path} index path={item?.path} element={<Suspense fallback={<span>Loading...</span>}>{item?.element}</Suspense>} />;
        })}
      </Routes>
    </div>
  )
};


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
