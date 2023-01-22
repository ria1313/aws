const AWS = require('aws-sdk');
const ISO6391 = require('iso-639-1');
// Set the region 
AWS.config.update({region: 'ap-south-1'});

const docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    const names= ISO6391.getAllNames();
    for(let name of names) {
         var params = {
    TableName : 'language_list',
    Item: {
            language_name: name,
    }
  };
   let data= await docClient.put(params).promise();
if(!data){
    console.log('error');
} else {
   console.log(ISO6391.getAllNames())
}

}

};