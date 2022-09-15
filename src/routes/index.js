import { addViewToListingRoute } from "./addViewtoListings";
import { createNewListing } from "./CreateNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListing } from "./getListing";
import { getUserListingRoute } from "./getUserListingRoute";
import { updateListingRoute } from "./updateListing";

export default [
    getAllListingsRoute,
    getListing,
    addViewToListingRoute,
    getUserListingRoute,
    createNewListing,
    updateListingRoute,
    deleteListingRoute,
];