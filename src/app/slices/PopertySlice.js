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
    initialState,
    reducers: {
        propertyDetails: (state, action) => {
            state.form.propertyDetails = action?.payload?.propertyDetails;
            state.form.typesAndPurpose = action?.payload?.typesAndPurpose;
            state.form.rentalDetails = action?.payload?.rentDetails;
            state.form.contactDetails = action?.payload?.contactDetails;
            state.form.locationAndAddress = action?.payload?.locationAndAddress;
            state.form.ownerId = action?.payload?.ownerId;
        },
        updatePropertyDetails: (state, action) => {
            state.updateProperty.propertyDetails = action?.payload?.propertyDetails;
            state.updateProperty.typesAndPurpose = action?.payload?.typesAndPurpose;
            state.updateProperty.rentalDetails = action?.payload?.rentDetails;
            state.updateProperty.contactDetails = action?.payload?.contactDetails;
            state.updateProperty.locationAndAddress = action?.payload?.locationAndAddress;
            state.updateProperty.ownerId = action?.payload?.ownerId;
        },
        addAmenities: (state, action) => {
            state.form.amenities = action.payload;
        },
        updateAmenities: (state, action) => {
            state.updateProperty.amenities = action.payload;
        },
        uploadMedia: (state, action) => {
            if (action?.payload?.videos == undefined || action?.payload?.videos?.length < 1) {
                state.form.upload = {
                    images: action.payload.images
                }
            } else {
                state.form.upload = {
                    images: action.payload.images,
                    videos: action.payload.videos,
                }
            }
        },
        updateUploadMedia: (state, action) => {
            if (action?.payload?.videos == undefined || action?.payload?.videos?.length < 1) {
                state.updateProperty.upload = {
                    images: action.payload.images
                }
            } else {
                state.updateProperty.upload = {
                    images: action.payload.images,
                    videos: action.payload.videos,
                }
            }
        },
        resetForm: (state, _) => {
            state.form = {
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
            }
        },
        updatePropertyData: (state, action) => {
            console.log('from_redux', action?.payload)
            state.updateProperty = {
                propertyDetails: action?.payload?.propertyDetails,
                typesAndPurpose: action?.payload?.typesAndPurpose,
                rentalDetails: action?.payload?.rentDetails,
                contactDetails: action?.payload?.contactDetails,
                locationAndAddress: action?.payload?.locationAndAddress,
                ownerId: action?.payload?.ownerId,
                _id: action?.payload?._id,
                upload: {
                    images: action.payload.images,
                    videos: action.payload.videos,
                },
                amenities: action.payload.amenities
            }
        }
    }
});

// this is for dispatch
export const { propertyDetails, addAmenities, uploadMedia, resetForm, updatePropertyDetails, updatePropertyData, updateAmenities, updateUploadMedia } = propertySlice.actions;

// this is for configureStore
export default propertySlice.reducer;