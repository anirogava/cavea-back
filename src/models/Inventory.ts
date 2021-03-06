import {DataTypes, Model, Sequelize} from "sequelize";

export interface InventoryAttributes {
    id: number;
    name: string;
    price: number;
    address: string;
}

export interface InventoryCreationAttributes {
    name: string;
    price: number;
    address: string;
}


export class Inventory extends Model<InventoryAttributes, InventoryCreationAttributes> {
    public id!: number;
    public name!: string;
    public price!: number;
    public address!: string;

    public static initializeModel(sequelize: Sequelize) {
        Inventory.init(
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                },
                name: {
                    type: DataTypes.STRING,
                },
                price: {
                    type: DataTypes.DECIMAL,
                },
                address: {
                    type: DataTypes.STRING,
                },
            }, {
                tableName: 'inventory',
                paranoid: true,
                sequelize
            }
        )
    }
}
