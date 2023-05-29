const { Cv, Experience, Formation } = require("../../db");

const updateCv = async (body) => {
    let response = {};
    const {id, ...CvData} = body;
    await Cv.update(CvData,{
        where: {id: id},
        include: [
            {
                model: Experience
            },
            {
                model: Formation
            }
        ]
    }).then(async (num) => {
        if(num == 1){
            response = body;
        }
    });

    return response;
}

module.exports = {
    updateCv
}