const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});
const documentClient = new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
 var params = {
    TableName : 'language_list',
    Item: {
            language_code: 'be',
            country_name: 'Belgium', 
    }
};
let data= await documentClient.put(params).promise();
if(!data){
    console.log('error');
} else {
    console.log(data.Item);
}

};
