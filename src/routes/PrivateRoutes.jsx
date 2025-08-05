import { Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import Cart from '../pages/Cart';
// import Profile from '../pages/Profile';
// import Orders from '../pages/Orders';
// import GroupBuy from '../pages/GroupBuy';
import Layout from "../layouts/layout";


// export default function PrivateRoutes() {
//   const { user } = useAuth();

//   return (
//     <Routes>
//       {user ? (
//         <>
//            <Route path="/" element={<Layout />}>
// //           <Route path="/cart" element={<Cart />} />
// //           <Route path="/profile" element={<Profile />} />
// //           <Route path="/orders" element={<Orders />} />
// //           <Route path="/group-buy" element={<GroupBuy />} />
//           </Route>
//         </>
//       ) : (
//         <Route path="*" element={<Navigate to="/login" />} />
//       )}
//     </Routes>
//   );
// }
