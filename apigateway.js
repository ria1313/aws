const client = new APIGatewayClient({ region: "ap-south-1" });

const params = {
  /** input parameters */
};
const command = new CreateApiKeyCommand(params);
try {
    const data = await client.createApiKey(command);
    // process data.
  } catch (error) {
    // error handling.
  }
  
  // Promises.
  client
    .createApiKey(params)
    .then((data) => {
      // process data.
    })
    .catch((error) => {
      // error handling.
    });
  
  // callbacks.
  client.createApiKey(params, (err, data) => {
    // process err and data.
  });
  try {
    const data = await client.send(command);
    // process data.
  } catch (error) {
    const { requestId, cfId, extendedRequestId } = error.$$metadata;
    console.log({ requestId, cfId, extendedRequestId });
  }