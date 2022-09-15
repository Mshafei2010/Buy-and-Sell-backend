import Boom from "@hapi/boom";
import { db } from "../database";

export const getListing = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req,h) => {
        const id = req.params.id;
        const {results} = await db.query('Select * From listings Where listings.id=?',[id]);
        const listings = results[0];
        if(!listings)
            {
                throw Boom.notFound(`Listing does not found with this id ${id}`);
            }
        return listings;
    }
}