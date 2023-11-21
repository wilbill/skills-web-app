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
async function getProfiles(){
    try {
        const response = await axios.get('http://localhost:4000/profile/all');
        const profiles = response.data;
        console.log("profiles:: ", profiles);
        return profiles;
      } catch (err) {
        console.log(err);
        throw err; 
      }
}

function dateNow(){
    const date = new Date();
    return date;
  }


module.exports = {getSkills,dateNow,getProfiles}