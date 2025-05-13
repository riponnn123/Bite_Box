import {use, useEffect, useState} from 'react';
import { RESTAURANT_MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    try {
      const data = await fetch(
        RESTAURANT_MENU_API + resId
      );
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  }
};

export default useRestaurantMenu;