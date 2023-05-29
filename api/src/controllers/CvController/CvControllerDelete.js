const { Cv, Experience, Formation } = require("../../db");

const deleteCv = async (body) => {
    let response = {};
    const {id} = body;
    await Cv.update({registed: false},{
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
    deleteCv
}