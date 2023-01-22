const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
const params = {
  TableName : 'language_list',
  Key: {
    language_code: 'en',
  }
};

   let data= await documentClient.delete(params).promise();

  if(data){
    console.log(data);
  } else {
    console.error('error');
  }
};