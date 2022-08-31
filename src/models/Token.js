import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const Token = sequelize.define(
  "token",
  {
    userId: {
       type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4(),
        references: {
            model: 'user',
            key: 'userid',
          },
    },
    token: {
      type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
  },
  {
    timestamps: false,
  }
);
