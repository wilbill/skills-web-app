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
// async function fetchData() {
//     try {
//       const skills = await getSkills();
//       console.log("here ", skills);
//     } catch (err) {
//       console.error('Error fetching skills:', err);
//     }
//   }

//   fetchData()

// console.log("here ",getSkills())

module.exports = {getSkills}