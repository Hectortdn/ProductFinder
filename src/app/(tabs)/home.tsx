import React from "react";
import { router } from "expo-router";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";

import { ProductList } from "@components/product-list/product-list";
import { FloatingActionButton, Screen } from "@components";
import { useTabStatusBarStyle } from "@hooks";
import { theme } from "@theme";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  const handleRegisterNewProduct = () => {
    router.navigate("/product-register");
  };

  const handleNavigateToProductDetails = (productId: number) => {
    router.navigate({
      pathname: "/(app)/product-details",
      params: { productId: JSON.stringify(productId) },
    });
  };

  const ProductListMan = React.useCallback(() => {
    return (
      <ProductList
        gender="man"
        onProductDetails={handleNavigateToProductDetails}
      />
    );
  }, []);

  const ProductListWomen = React.useCallback(() => {
    return (
      <ProductList
        gender="women"
        onProductDetails={handleNavigateToProductDetails}
      />
    );
  }, []);

  useTabStatusBarStyle("dark-content", true);

  return (
    <Screen headerProps={{ headerShow: false }}>
      <Tab.Navigator overScrollMode="never" screenOptions={topTabsOptions}>
        <Tab.Screen
          name="Home"
          component={ProductListMan}
          options={{ tabBarLabel: "Produtos Masculinos" }}
        />
        <Tab.Screen
          name="Settings"
          component={ProductListWomen}
          options={{ tabBarLabel: "Produtos Femininos" }}
        />
      </Tab.Navigator>

      <FloatingActionButton
        iconName="plus"
        onAction={handleRegisterNewProduct}
      />
    </Screen>
  );
}

const topTabsOptions: MaterialTopTabNavigationOptions = {
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
    color: theme.colors.black,
    textTransform: "capitalize",
  },

  tabBarStyle: {
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 10 },
  },

  tabBarPressColor: "transparent",
  tabBarIndicatorStyle: {
    height: 2.5,
    backgroundColor: theme.colors.primary,
  },
};

// const tabBarStyle = {
//   elevation: 0,
//   shadowRadius: 0,
//   shadowOpacity: 0,
//   shadowOffset: { width: 0, height: 10 },
// };

// const tabOptions: MaterialTopTabNavigationOptions = {
//   tabBarLabelStyle: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "rgba(0, 0, 0, 1)",
//     textTransform: "capitalize",
//   },
// };
