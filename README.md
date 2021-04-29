<p>
    <a href="https://github.com/KaNguy/Discord-Build-Info-JS-API/issues"><img src="https://img.shields.io/github/issues/KaNguy/Discord-Build-Info-JS-API" alt="Issues"/></a>
    <a href="https://github.com/KaNguy/Discord-Build-Info-JS-API/network/members"><img src="https://img.shields.io/github/forks/KaNguy/Discord-Build-Info-JS-API" alt="Forks" /></a>
    <a href="https://github.com/KaNguy/Discord-Build-Info-JS-API/stargazers"><img src="https://img.shields.io/github/stars/KaNguy/Discord-Build-Info-JS-API" alt="Stars" /></a>
    <a href="LICENSE.md"><img src="https://img.shields.io/github/license/KaNguy/discord-build-info-js-api?color=007ace" alt="License" /></a>
</p>

# Discord Build Info JS API
A miniature API heavily powered by [Discord-Build-Info-JS](https://www.npmjs.com/package/discord-build-info-js) that returns the build information of Discord's clients via its API endpoints. 

## Endpoints 
The API is dynamic and technically has one endpoint, and accepts three release channels being `canary`, `stable`, and `ptb`.   

```/build/{release-channel}``` — **GET**   

The endpoint is only to be request with a **GET** method since the only data that needs to be retrieved is the build information. This data returns the `release channel`, `build number`, `build hash`, and `build ID`. 

## Requesting the Data
Assuming the application or client using the API is using the HTTP core module, there is an existing example below that uses the options. Don't take it code for code. 

```js
let options = {
    hostname: `HOST_NAME_HERE`,
    method: "GET",
    path: "/build/{release-channel}"
}

http.get(options, callback => {
    let body = "";
    callback.on("data", data => body += String(data));
    callback.on("end", () => {
        /* Do something with the data here. */
    });
});
``` 

**NOTE:** The data does need to be parsed into a string to return the data, otherwise, it may return unparsed code that is barely readable.  

- Methods to convert into parsable string
  - ```Buffer.concat(data).toString()``` 
  - ```String(data)```

## License 
[Apache 2.0](https://github.com/KaNguy/Discord-Build-Info-JS-API/blob/main/LICENSE.md)
