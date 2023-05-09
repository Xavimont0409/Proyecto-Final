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

const { Admin, Applicant, Company, Cv, Document, Journey, PaymentMethod, Seniority, TaxStatus, Vacant, WorkMethod, Operations} = sequelize.models;

Applicant.hasOne(Cv);
Cv.belongsTo(Applicant);

Vacant.hasMany(Company);
Company.belongsTo(Vacant);

Journey.hasMany(Vacant);
Vacant.belongsTo(Journey);

Seniority.hasMany(Vacant);
Vacant.belongsTo(Seniority);

WorkMethod.hasMany(Vacant);
Vacant.belongsTo(WorkMethod);

Company.belongsToMany(PaymentMethod, {though: Operations})
PaymentMethod.belongsToMany(Company, {though: Operations})

Vacant.belongsToMany(Applicant, {though: ApplicantVacant})
Applicant.belongsToMany(Vacant, {though: ApplicantVacant})

Vacant.belongsToMany(Applicant, {though: ApplicantVacant})
Applicant.belongsToMany(Vacant, {though: ApplicantVacant})

Applicant.belongsToMany(PaymentMethod, {though: Operations})
PaymentMethod.belongsToMany(Applicant, {though: Operations})

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
