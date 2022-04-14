export function JavaScriptSection() {
  const props = {
    username: "admin",
    password: "123456",
    email: "admin@example.com"
  };
  /** replace these with destructuring assignment */
  let username, email;

  /** remove all falsy values from this array */
  const falsyArray = [false, null, 1, 5, undefined];
  const truthyArray = falsyArray;
  /** Flatten this bi-directional array */
  const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
  const biDimensionalArrResult = ["value"];
  /** Flatten tthis multi dimentional array */
  const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
  const multiArrayResult = ["value"];

  var pattern = /([A-Z])\w+/g;
  /** Implement this regex to evaluate string 'How are you'  */
  const hasPattern = false;

  /** Write a promise that returns a message of 'I'm done' after 1 second */

  return (
    <div className="App">
      <p>Username</p>
      <p>{username}</p>
      <p>Email</p>
      <p>{email}</p>
      <p>Falsy Array</p>
      {truthyArray.map(
        (value, index) =>
          (value ? "truthy" : "falsy").concat(
            index < truthyArray.length - 1 ? ", " : ""
          ) //
      )}
      <p>Bi Dimensional Array</p>
      {biDimensionalArrResult.map((value) => (
        <span>{value}</span>
      ))}
      <p>Multi Dimensional Array</p>
      {multiArrayResult.map((value) => (
        <span>{value}</span>
      ))}
      <p>Regex Result</p>
      {hasPattern.toString()}
    </div>
  );
}
