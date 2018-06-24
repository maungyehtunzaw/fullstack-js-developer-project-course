'use strict';

module.exports=(sequelize,DataTypes)=>{
    var Package=sequelize.define('Package',{
        title:DataTypes.STRING,
        description:DataTypes.TEXT,
        thumb:DataTypes.STRING,
        price:DataTypes.FLOAT,
        duration:DataTypes.STRING

    },
    {
        timestamps:true,
        createdAt:"created",
        updatedAt:"modified"
        //tableName:'packages' for package=packages default...
    }

    );
    return Package;
};