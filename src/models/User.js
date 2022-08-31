import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

import { Workpackage } from "./Workpackage.js";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID ,
      defaultValue: DataTypes.UUIDV4(),
      primaryKey: true,
    },
    username: {
     type: DataTypes.TEXT,
     allowNull: false,
    },
    email: {
     type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
       validate: {
      is: '[^@]+@[^@]+\.[^@]+'
    }
    },
    password : {
   type: DataTypes.TEXT,
  allowNull: false,
  min : 20 ,
  validate: {
    is: '[^@]+@[^@]+\.[^@]+'
  },
  },
    
    verified : {
  type: DataTypes.BOOLEAN,
  defaultValue: false,
    },
    
    
    
  },
  {
    timestamps: true,
  }
);

User.hasone(Token, {
  foreignKey: "userId",
  sourceKey: "id",
});

Token.belongsTo(User, {
  foreignKey: "userId",
  targetId: "id",
});
