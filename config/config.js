/* Config Sample
 *
 * You must adapt the config file exactly as it is written in the documentation.
 * the lines marked with ‘<--’ must be edited
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where SmartMirror is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "de-CH",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [

		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Meine Termine",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 60001,
						symbol: "calendar-check",
						url: ""    // <-- add your calendar URL here
					},
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
			    lat: 0.0,  // <-- add your latitude cordinates here
				lon: 0.0   // <-- add your longidue cordinates here
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Wetter",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
			    lat: 0.0,  // <-- add your latitude cordinates here
				lon: 0.0   // <-- add your longidue cordinates here
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
