import express, {Router} from 'express';


import {Sequelize} from "sequelize";
import {Inventory} from "./models/Inventory";

export const sequelize = new Sequelize(
    'cavea_back',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
        },
    }
);

Inventory.initializeModel(sequelize);

const app = express();


app.use(express.json({}));
app.use(express.urlencoded({extended: false}));

const router = Router();

router.get('/list', async (req, res) => {
    const list = await Inventory.findAll();

    res.send(list).status(200);
});

app.use('/', router);

app.listen(5002, () => {
    console.log("Server is listening on port 5000....");
});