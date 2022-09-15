import { db } from "../database";
import { v4 as uuid } from "uuid";

export const createNewListing ={
    method: "POST",
    path:"/api/new-listings/{userId}",
    handler: async (req,h) => {
        const id = uuid();
        const user_id = req.params.userId;
        const {name = '' , description ='' , price=0} = req.payload;
        const views=0;
        await db.query(`
            Insert Into listings (id,name,description,price,user_id,views)
                Values (?,?,?,?,?,?);
        `,
        [id,name,description,price,user_id,views]
        )
        return {id,name,description,price,user_id,views};
    }
}

/*,
    "user_id":"KJnyQWs8h8b20p6NIzST1HeE5KU2" */