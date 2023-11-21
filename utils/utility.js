const axios = require('axios')

async function getSkills(){
    try {
        const response = await axios.get('http://localhost:4000/skills');
        const skills = response.data;
        console.log("skills:: ", skills);
        return skills;
      } catch (err) {
        console.log(err);
        throw err; 
      }
}


module.exports = {getSkills}