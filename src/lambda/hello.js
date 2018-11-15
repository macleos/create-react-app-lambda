// show object spread works, i.e. babel works
var exec = require("child_process").exec;
const obj = {
  foo: "bar"
};
export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters);
  exec('env/bin/python -c "import sys; print sys.version_info"', function(
    error,
    stdout
  ) {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: "Hello, World!", ...obj })
    });
  });
}
