var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-south-1'});


// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // TODO implement


var params = {
 TableName: 'language_list',
 Key: {
     language_code: 'en'
 }
};

// docClient.scan(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Item);
//   }
// });

let data= await docClient.get(params).promise();
if(!data){
    console.log('error');
} else {
    console.log(data.Item);
}

};
