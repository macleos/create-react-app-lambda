// show object spread works, i.e. babel works
var exec = require("child_process").exec;
const obj = {
  foo: "bar"
};
export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters);
  exec("pwd", function(error, stdout) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: stdout, ...obj })
    });
  });
}
