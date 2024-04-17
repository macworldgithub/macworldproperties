import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    form: {
        typesAndPurpose: null,
        locationAndAddress: null,
        propertyDetails: null,
        rentalDetails: null,
        contactDetails: null,
        amenities: [],
        upload: {
            images: [],
            videos: [],
        },
        isLoading: false,
        isError: false,
        featuredProperties: [],
        propertyDetails: [],
        propertydataArr: [],
        ownerId: String,
    },
    updateProperty: {
        _id: '',
        typesAndPurpose: null,
        locationAndAddress: null,
        propertyDetails: null,
        rentalDetails: null,
        contactDetails: null,
        amenities: [],
        upload: {
            images: [],
            videos: [],
        },
        isLoading: false,
        isError: false,
        featuredProperties: [],
        ownerId: String,
    },
    userProperty: [],
    isAuthorize: false,
    updatePropertyToggle: false,
    open: true
};


export const propertySlice = createSlice({
    name: 'property',
    initialState: initialState,
    reducers: {
        propertyDetails: (state, action) => {
                state.form.propertyDetails = action?.payload?.propertyDetails;
                state.form.typesAndPurpose = action?.payload?.typesAndPurpose;
                state.form.rentalDetails = action?.payload?.rentDetails;
                state.form.contactDetails = action?.payload?.contactDetails;
                state.form.locationAndAddress = action?.payload?.locationAndAddress;
                state.form.ownerId = action?.payload?.ownerId
        }
    }
});

// this is for dispatch
export const { propertyDetails } = propertySlice.actions;

// this is for configureStore
export default propertySlice.reducer;