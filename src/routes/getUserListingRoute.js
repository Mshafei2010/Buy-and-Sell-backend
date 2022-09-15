import { db } from "../database";

export const getUserListingRoute ={
    method:'GET',
    path:'/api/users/{userId}/listings',
    handler: async (req, h) =>{
        const userId = req.params.userId;
        
        const {results} = await db.query(
            'Select * FROM listings WHERE user_id=?',
            [userId],
        );
        return results;
    }
}