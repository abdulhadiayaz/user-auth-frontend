import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "../screens/Dashboard/Dashboard";
import Products from "../screens/Products/Products.index";
import AddProduct from "../screens/Products/Products.Add";
import ProductVariants from "../screens/ProductVariants/ProductVariants.index";
import AddProductVariants from "../screens/ProductVariants/ProductVariants.Add";
import Pricings from "../screens/Pricings/Pricings.index";
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import DealerRequests from "../screens/DealerRequests/DealerRequests.index";
import Orders from "../screens/Orders/Orders.Index";
import AddDealerDirectory from "../screens/DealerDirectories/DealerDirectories.Add";
import DealerDirectory from "../screens/DealerDirectories/DealerDirectories.Index";
import DealerRequestDetails from "../screens/DealerRequests/DealerRequests.Details";
import Dealers from "../screens/Dealers/Dealers.index";
import OrderDetails from "../screens/Orders/Orders.Details";
import DealerDetails from "../screens/Dealers/Dealers.Details";
import EditProduct from "../screens/Products/Products.Edit";
import EditDealerDirectory from "../screens/DealerDirectories/DealerDirectories.Edit";
import EditVariant from "../screens/ProductVariants/ProductVariants.Edit";
import ForgotPassword from "../screens/Login/Login.ForgotPassword";
import ConfirmPassword from "../screens/Login/Login.ConfirmPassword";
import Login from "../screens/Login/Login.index";
import AddPackage from "../screens/Packages/Packages.Add";
import Packages from "../screens/Packages/Packages.index";
import AddBulkDiscount from "../screens/BulkDiscount/BulkDiscount.Add";
import BulkDiscounts from "../screens/BulkDiscount/BulkDiscount.index";
import PackageDetails from "../screens/Packages/Packages.Details";
import AddRateCard from "../screens/RateCards/RateCards.Add";
import RateCards from "../screens/RateCards/RateCards.index";
import BulkDiscountDetails from "../screens/BulkDiscount/BulkDiscount.Details";
import SaleCardDetails from "../screens/RateCards/RateCards.SaleCardDetails";
import PolicyCardDetails from "../screens/RateCards/RateCards.PolicyCardDetails";
import Notifications from "../screens/Notifications/Notifications.index";
import SalesOfficers from "../screens/SalesOfficers/SalesOfficers.index";
import AddSalesOfficer from "../screens/SalesOfficers/SalesOfficers.Add";
import AddPriceList from "../screens/PriceList/PriceList.Add";
import PriceList from "../screens/PriceList/PriceList.index";
import PriceListDetails from "../screens/PriceList/PriceList.Details";
import AddPolicyCard from "../screens/PolicyCards/PolicyCards.Add";
import PolicyCards from "../screens/PolicyCards/PolicyCards.index";
import AssignDealers from "../screens/PolicyCards/PolicyCards.AssignDealers";
import SalesOfficerDetails from "../screens/SalesOfficers/SalesOfficers.Details";
import AddDealersToSalesOfficer from "../screens/SalesOfficers/SalesOfficers.AddDealers";
import { logoutOemUser } from "../screens/Login/Login.actions";
import SubCompanyPolicyDetails from "../screens/PolicyCards/PolicyCards.Details";
import AddDealerTags from "../screens/Tags/Tags.Add";
import AssignTags from "../screens/PolicyCards/PolicyCards.AssignTags";
import Tags from "../screens/Tags/Tags.index";

const Routes = () => {
  const state = useSelector((state) => state);
  const { isAuthenticated } = state.oemAuth;
  const dispatch = useDispatch();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/login" />} />
        {!isAuthenticated ? (
          dispatch(logoutOemUser()) && (
            <>
              <Route
                path="*"
                exact
                component={() => <Redirect to="/login" />}
              />
              <Route path="/newPassword" exact component={ConfirmPassword} />
              <Route path="/forgotPassword" exact component={ForgotPassword} />
              <Route path="/login" exact component={Login} />
            </>
          )
        ) : (
          <Route
            path="/login"
            component={() => <Redirect to="/users/dashboard" />}
          />
        )}
        <ProtectedRoute
          path="/users/tags/add"
          exact
          component={AddDealerTags}
        />
        <ProtectedRoute path="/users/tags" exact component={Tags} />
        <ProtectedRoute
          path="/users/policyCards/:policyCardId/assignTags"
          exact
          component={AssignTags}
        />
        <ProtectedRoute
          path="/users/policyCards/:policyCardId/details"
          exact
          component={SubCompanyPolicyDetails}
        />
        <ProtectedRoute
          path="/users/policyCards/:policyCardId/assignDealers"
          exact
          component={AssignDealers}
        />
        <ProtectedRoute
          path="/users/policyCards/add"
          exact
          component={AddPolicyCard}
        />
        <ProtectedRoute
          path="/users/sales/:salesId/subCompanies/:subCompanyId/dealers/add"
          exact
          component={AddDealersToSalesOfficer}
        />
        <ProtectedRoute
          path="/users/sales/:salesId/subCompanies/:subCompanyId/details"
          exact
          component={SalesOfficerDetails}
        />
        <ProtectedRoute
          path="/users/sales/add"
          exact
          component={AddSalesOfficer}
        />
        <ProtectedRoute path="/users/policyCards" component={PolicyCards} />
        <ProtectedRoute path="/users/sales" exact component={SalesOfficers} />
        <ProtectedRoute path="/users/dashboard" exact component={Dashboard} />
        <ProtectedRoute
          path="/users/notifications"
          exact
          component={Notifications}
        />
        <ProtectedRoute
          path="/users/priceLists/:priceListId/details"
          component={PriceListDetails}
        />
        <ProtectedRoute path="/users/priceLists/add" component={AddPriceList} />
        <ProtectedRoute path="/users/priceLists" component={PriceList} />
        <ProtectedRoute
          path="/users/rateCards/:policyCardId/details"
          component={PolicyCardDetails}
        />
        <ProtectedRoute
          path="/users/rateCards/saleCard/:saleCardId/details"
          component={SaleCardDetails}
        />
        <ProtectedRoute path="/users/rateCards/add" component={AddRateCard} />
        <ProtectedRoute path="/users/rateCards" component={RateCards} />
        <ProtectedRoute
          path="/users/bulkDiscounts/:bulkDiscountId/details"
          component={BulkDiscountDetails}
        />
        <ProtectedRoute
          path="/users/bulkDiscounts/add"
          component={AddBulkDiscount}
        />
        <ProtectedRoute path="/users/bulkDiscounts" component={BulkDiscounts} />
        <ProtectedRoute path="/users/packages/add" component={AddPackage} />
        <ProtectedRoute
          path="/users/packages/:packageId/details"
          component={PackageDetails}
        />
        <ProtectedRoute path="/users/packages" component={Packages} />
        <ProtectedRoute
          path="/users/orders/:orderId/details"
          component={OrderDetails}
        />
        <ProtectedRoute path="/users/orders" component={Orders} />
        <ProtectedRoute
          path="/users/dealers/:dealerId"
          component={DealerDetails}
        />
        <ProtectedRoute path="/users/dealers" component={Dealers} />
        <ProtectedRoute
          path="/users/dealerRequests/:dealerRequestId"
          component={DealerRequestDetails}
        />
        <ProtectedRoute
          path="/users/dealerRequests"
          component={DealerRequests}
        />
        <ProtectedRoute
          path="/users/dealerDirectories/:dealerDirectoryId/edit"
          component={EditDealerDirectory}
        />
        <ProtectedRoute
          path="/users/dealerDirectories/add"
          component={AddDealerDirectory}
        />
        <ProtectedRoute
          path="/users/dealerDirectories"
          component={DealerDirectory}
        />
        <ProtectedRoute path="/users/pricings" component={Pricings} />
        <ProtectedRoute
          path="/users/products/:productId/variants/:variantId/edit"
          component={EditVariant}
        />
        <ProtectedRoute
          path="/users/products/:productId/variants/add"
          component={AddProductVariants}
        />
        <ProtectedRoute
          path="/users/products/:productId/variants"
          component={ProductVariants}
        />
        <ProtectedRoute
          path="/users/products/:productId/edit"
          component={EditProduct}
        />
        <ProtectedRoute path="/users/products/add" component={AddProduct} />
        <ProtectedRoute path="/users/products" exact component={Products} />
        <ProtectedRoute path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
