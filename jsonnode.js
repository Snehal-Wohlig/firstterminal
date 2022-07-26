const fs = require("fs");
const bioData ={   
    Name:"Kshitij",
    Age:26,
    MobileNo:7539518246,
};

const jsonData=JSON.stringify(bioData);
/**fs.writeFile("json1.json",jsonData,(error) => {
    console.log("done");
});**/


/**console.log(jsonData);
 * milti line comment **/

fs.readFile("json1.json","utf8",(error,data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});
