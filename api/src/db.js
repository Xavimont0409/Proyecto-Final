require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { URL_DATABASE } = process.env;

const sequelize = new Sequelize(URL_DATABASE, {
  logging: false, 
  native: false, 
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Star, Admin, Applicant, Company, Cv, Document, Workday, Operation, PayMethod, Seniority, Tax_Condition, Vacant, WorkMethod, Experience, Formation, Product } = sequelize.models;

Applicant.hasOne(Cv);
Cv.belongsTo(Applicant);

Applicant.hasOne(Document);
Document.belongsTo(Applicant);

Cv.hasMany(Experience);
Experience.belongsTo(Cv);

Cv.hasMany(Formation);
Formation.belongsTo(Cv);

Company.hasMany(Vacant);
Vacant.belongsTo(Company);

Company.hasMany(Star);
Star.belongsTo(Company);

Workday.hasMany(Vacant); 
Vacant.belongsTo(Workday);

Seniority.hasMany(Vacant);
Vacant.belongsTo(Seniority);

WorkMethod.hasMany(Vacant);
Vacant.belongsTo(WorkMethod);

Company.belongsToMany(PayMethod, {through: Operation});
PayMethod.belongsToMany(Company, {through: Operation});

Vacant.belongsToMany(Applicant, {through: 'ApplicantVacant'});
Applicant.belongsToMany(Vacant, {through: 'ApplicantVacant'});

Applicant.belongsToMany(PayMethod, {through: Operation});
PayMethod.belongsToMany(Applicant, {through: Operation});

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
