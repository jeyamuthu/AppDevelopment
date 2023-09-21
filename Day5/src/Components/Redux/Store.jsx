import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Apple',
        description: 'Product description goes here.',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/apple-2788599_1920/b85c4bd37db5c456e0beaee70ce0e375.jpg',
      },
      {
        id: 2,
        name: "Broad Bean",
        description: 'Product description goes here.',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/Broad_beans_growing_in_fields_at_Kilmeston_-_geograph.org.uk_-_439334_ARxnG8g/88bff64f1bac71829f024d945c177ac1.jpg',
      },
      {
        id: 3,
        name: "Celery",
        description: 'Product description goes here.',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210530_160554_068/2688cc6604d516f2757a25b1319c9854.jpg',
      },
      {
        id: 4,
        name: "Zuccini",
        description: 'Product description goes here.',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210120_212242_071/3dca7759ccf1972ff517cdefc14f60f5.jpg',
      },
      {
        id: 5,
        name: "Radish",
        description: 'Product description goes here.',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210518_222112_564/3f9e2069b29e02ecfbc6dd2853575491.jpg',
      },
      {
        id: 6,
        name: "Tomato",
        description: 'Product description goes here.',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20191120_212558_743_UEzLNRX/bbc92a308712f67be8ad2fd9e7801024.jpg',
      },
    ],
  },
  reducers: {},
});
const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
    // Add more slices as needed
  },
});

export default store;