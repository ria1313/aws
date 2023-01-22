var AWS = require('aws-sdk');
const ISO6391 = require('iso-639-1');
// Set the region 
AWS.config.update({region: 'ap-south-1'});

var docClient = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
    const codes= ISO6391.getAllCodes();
    for(let code of codes) {
         var params = {
    TableName : 'language_list',
    Item: {
            no_of_users: Math.floor(Math.random()*100),
            language_code: code,
            
       
    }
  };
   let data= await docClient.put(params).promise();
if(!data){
    console.log('error');
} else {
    console.log(data.Item);
}

}

};