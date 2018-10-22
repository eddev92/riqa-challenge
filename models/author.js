module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('author', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
  }
);
      
      // force: true will drop the table if it already exists
      Author.associate = (models) => {
        Author.hasMany(models.post);
      };
    
      return Author;
};
